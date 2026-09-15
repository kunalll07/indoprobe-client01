import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
      <Container className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-offwhite sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-offwhite/70 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
