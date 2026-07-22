type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

/**
 * Editorial section header: a small tracked "overline" label with a hairline
 * rule, a light serif title, and an optional subtitle. Shared across sections
 * so every heading reads as one system.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "text-center mx-auto" : "text-left"} ${className}`}
    >
      <div
        className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : "justify-start"}`}
      >
        <span className="h-px w-8 bg-accent/50" />
        <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
          {label}
        </span>
        {centered && <span className="h-px w-8 bg-accent/50" />}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-charcoal/60 leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
