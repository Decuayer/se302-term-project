/**
 * @file classrooms.tsx
 * @module renderer/pages
 *
 * Responsibility: Classroom Schedule view. For the selected classroom, shows a
 * day x slot matrix of the exams held there with occupancy versus capacity.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-3
 * References: architecture.png (Classroom Schedule View), SRS FR-12
 */
import Head from 'next/head'
import { PageHeader } from '../components/PageHeader'
import { TaskPlaceholder } from '../components/TaskPlaceholder'

export default function ClassroomsPage() {
  // TODO [D5-3 | Kutluay Aydın]: Add a classroom selector and a day x slot table; each cell shows the
  // course code and "students / capacity". Acceptance: selecting a classroom shows all of its exams
  // in the correct cells.
  return (
    <>
      <Head>
        <title>Classrooms - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="Classroom Schedule"
        subtitle="Exams held in each classroom by day and time slot."
      />
      <TaskPlaceholder
        taskId="D5-3"
        owner="Kutluay Aydın"
        description="Classroom selector and day x slot matrix."
      />
    </>
  )
}
