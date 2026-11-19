/**
 * @file help.tsx
 * @module renderer/pages
 *
 * Responsibility: Built-in user guide, available offline and reachable from the Help
 * menu and the sidebar.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-6
 * References: SRS FR-14, NFR-05, Sec. 6 step 6
 */
import Head from 'next/head'
import { PageHeader } from '../components/PageHeader'
import { USER_GUIDE_SECTIONS } from '../content/userGuide'

export default function HelpPage() {
  // TODO [D5-6 | Kutluay Aydın]: Add a table of contents with anchor links and render the section
  // bodies once userGuide.ts is written. Acceptance: the guide opens from the Help menu with the
  // internet disconnected.
  return (
    <>
      <Head>
        <title>Help - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="User Guide"
        subtitle="How to prepare files, generate and read schedules."
      />
      {USER_GUIDE_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="mb-4">
          <h2 className="text-lg font-medium">{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-1 text-sm">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </>
  )
}
