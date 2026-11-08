import Link from "next/link";

export default function PageHeader({
  title,
  description,
  parent,
  children,
}) {
  return (
    <header className="page-header">
      <nav className="page-header-nav" aria-label="Page navigation">

        <Link href="/" className="home-link">
          <span className="home-link-label">Home</span>
          <span className="home-link-aside" aria-hidden="true">
            (allegedly)
          </span>
        </Link>

        {parent && (
          <Link href={parent.href} className="page-header-parent">
            <span aria-hidden="true">← </span>
            {parent.label}
          </Link>
        )}
      </nav>

      <div className="page-header-content">
        <h1 className="page-header-title">{title}</h1>

        {description && (
          <p className="page-header-description">
            {description}
          </p>
        )}

        {children}
      </div>
    </header>
  );
}