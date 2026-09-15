import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950">
      <Container className="flex flex-col items-center py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-offwhite sm:text-4xl">
          This Page Could Not Be Found
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-offwhite/60">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
