import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            href="/"
            className="hover:text-gold no-underline transition-colors"
          >
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="mx-1" aria-hidden="true">
              ›
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-gold no-underline transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
