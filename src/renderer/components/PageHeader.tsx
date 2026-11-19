/**
 * @file PageHeader.tsx
 * @module renderer/components
 *
 * Responsibility: Consistent title and subtitle at the top of every screen (NFR-04).
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 */

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
    </header>
  )
}
