/**
 * @file home.tsx
 * @module renderer/pages
 *
 * Responsibility: Dashboard shown at start-up. Summarizes the import status of the
 * four input files, the last scheduling result and links to the available views.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 * References: architecture.png (Dashboard & Help Menu), SRS Sec. 6 step 1
 */
import Head from 'next/head'
import Link from 'next/link'
import { NAVIGATION_ITEMS } from '../components/Layout/navigation'
import { PageHeader } from '../components/PageHeader'
import { TaskPlaceholder } from '../components/TaskPlaceholder'

export default function HomePage() {
  // TODO [D5-1 | Kutluay Aydın]: Show import status per category (useAppStore.importStatus), the last
  // result (success, relaxations applied, stats) and quick actions. Acceptance: the dashboard lists
  // the available views (SRS Sec. 6 step 1).
  return (
    <>
      <Head>
        <title>Dashboard - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="Dashboard"
        subtitle="Import the input files, generate the exam schedule and inspect the results."
      />
      <TaskPlaceholder
        taskId="D5-1"
        owner="Kutluay Aydın"
        description="Import summary, last scheduling result and quick actions."
      />
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {NAVIGATION_ITEMS.filter((item) => item.href !== '/home').map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-md border border-slate-200 bg-white p-4 hover:border-slate-400"
            >
              <span className="font-medium">{item.label}</span>
              <span className="block text-xs text-slate-500">{item.requirement}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
