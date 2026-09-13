"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/content/types";

type FaqDraft = { question: string; answer: string };

type Props = {
  mode: "create" | "edit";
  postId?: string;
  initial?: BlogPost;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 100);
}

export function BlogPostForm({ mode, postId, initial }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [coverImageSrc, setCoverImageSrc] = useState(initial?.coverImage.src ?? "");
  const [coverImageAlt, setCoverImageAlt] = useState(initial?.coverImage.alt ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [authorRole, setAuthorRole] = useState(initial?.authorRole ?? "");
  const [category, setCategory] = useState(initial?.category ?? "");
  const [tags, setTags] = useState(initial?.tags.join(", ") ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [status, setStatus] = useState<"draft" | "published">(initial?.status ?? "draft");
  const [publishedAt, setPublishedAt] = useState(
    initial?.publishedAt ? initial.publishedAt.slice(0, 10) : new Date().toISOString().slice(0, 10)
  );
  const [faqs, setFaqs] = useState<FaqDraft[]>(initial?.faqs ?? []);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      setCoverImageSrc(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  function updateFaq(index: number, field: keyof FaqDraft, value: string) {
    setFaqs((prev) => prev.map((f, i) => (i === index ? { ...f, [field]: value } : f)));
  }

  function removeFaq(index: number) {
    setFaqs((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const payload = {
      title,
      slug,
      excerpt,
      coverImageSrc,
      coverImageAlt,
      author,
      authorRole,
      category,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      content,
      faqs: faqs.filter((f) => f.question.trim() && f.answer.trim()),
      status,
      publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
    };

    try {
      const url = mode === "create" ? "/api/admin/posts" : `/api/admin/posts/${postId}`;
      const method = mode === "create" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save post.");
      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save post.");
      setSaving(false);
    }
  }

  const inputClass =
    "w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent";
  const labelClass = "text-xs font-medium text-muted";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && <p className="rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass}>Title</label>
          <input required value={title} onChange={(e) => handleTitleChange(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass}>Slug (URL path)</label>
          <input
            required
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(slugify(e.target.value));
            }}
            className={inputClass}
          />
          <span className="text-xs text-muted">/blog/{slug || "your-post-slug"}</span>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass}>Excerpt</label>
          <textarea required rows={2} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass}>Cover Image</label>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImageUpload(file);
            }}
            className="text-sm text-muted"
          />
          {uploading && <span className="text-xs text-muted">Uploading...</span>}
          {coverImageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={coverImageSrc} alt="" className="mt-2 h-32 w-auto rounded-sm border border-line object-cover" />
          )}
          <input
            placeholder="Or paste an image URL directly"
            value={coverImageSrc}
            onChange={(e) => setCoverImageSrc(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass}>Cover Image Alt Text</label>
          <input required value={coverImageAlt} onChange={(e) => setCoverImageAlt(e.target.value)} className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Author</label>
          <input required value={author} onChange={(e) => setAuthor(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Author Role</label>
          <input required value={authorRole} onChange={(e) => setAuthorRole(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Category</label>
          <input required value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Tags (comma-separated)</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as "draft" | "published")} className={inputClass}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Published Date</label>
          <input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>
          Content (HTML — use &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;/&lt;li&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;a&gt;,
          &lt;img&gt;, &lt;blockquote&gt;. Anything else is stripped automatically on save.)
        </label>
        <textarea
          required
          rows={20}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${inputClass} font-mono text-xs leading-relaxed`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label className={labelClass}>FAQs (optional)</label>
          <button
            type="button"
            onClick={() => setFaqs((prev) => [...prev, { question: "", answer: "" }])}
            className="text-xs font-medium text-accent hover:underline"
          >
            + Add FAQ
          </button>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-sm border border-line p-3">
            <input
              placeholder="Question"
              value={faq.question}
              onChange={(e) => updateFaq(i, "question", e.target.value)}
              className={inputClass}
            />
            <textarea
              placeholder="Answer"
              rows={2}
              value={faq.answer}
              onChange={(e) => updateFaq(i, "answer", e.target.value)}
              className={inputClass}
            />
            <button type="button" onClick={() => removeFaq(i)} className="self-start text-xs text-red-600 hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving || uploading}
          className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : mode === "create" ? "Create Post" : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
