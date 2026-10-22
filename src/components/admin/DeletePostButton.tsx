"use client";

import { useState } from "react";

export function DeletePostButton({ id, title, onDeleted }: { id: string; title: string; onDeleted: () => void }) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(true);
    const res = await fetch(`/php-api/admin/posts.php?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      onDeleted();
    } else {
      window.alert("Failed to delete post.");
      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="text-red-600 hover:underline disabled:opacity-50"
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}
