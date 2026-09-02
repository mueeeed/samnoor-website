import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl text-heading">404</p>
      <h1 className="mt-4 font-heading text-2xl text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-ink">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Explore our product catalog or get in touch with our sales team.
      </p>
      <div className="mt-8 flex gap-4">
        <LinkButton href="/" variant="primary">Back to Home</LinkButton>
        <LinkButton href="/products" variant="outline">Browse Products</LinkButton>
      </div>
    </Container>
  );
}
