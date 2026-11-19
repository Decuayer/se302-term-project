/**
 * @file Sidebar.tsx
 * @module renderer/components/Layout
 *
 * Responsibility: Left navigation between the dashboard, import screen, result views
 * and help.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 * References: architecture.png (Dashboard & Help Menu, Views Container), SRS Sec. 6
 */
import Link from 'next/link'
import { NAVIGATION_ITEMS } from './navigation'

export function Sidebar() {
  // TODO [D5-1 | Kutluay Aydın]: Highlight the active route (useRouter().pathname), disable result
  // views until a schedule exists, and apply the final theme. Acceptance: every page is reachable.
  return (
    <nav className="flex w-56 shrink-0 flex-col gap-1 border-r border-slate-200 bg-white p-4">
      <p className="mb-4 text-lg font-semibold">Exam Scheduler</p>
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded px-3 py-2 text-sm hover:bg-slate-100"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
