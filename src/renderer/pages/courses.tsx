/**
 * @file courses.tsx
 * @module renderer/pages
 *
 * Responsibility: Course Schedule view. Lists every course with its exam day, time,
 * classroom and student count, with a detail panel for the selected course.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-4
 * References: architecture.png (Course Schedule View), SRS FR-11
 */
import Head from 'next/head'
import { PageHeader } from '../components/PageHeader'
import { TaskPlaceholder } from '../components/TaskPlaceholder'

export default function CoursesPage() {
  // TODO [D5-4 | Kutluay Aydın]: Render useAppStore.schedule.assignments with DataTable (columns:
  // course, day, time, classroom, students) and open a detail panel on row click. Acceptance: all
  // courses are listed with their assigned day, time and room.
  return (
    <>
      <Head>
        <title>Courses - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="Course Schedule"
        subtitle="Exam day, time and classroom of every course."
      />
      <TaskPlaceholder
        taskId="D5-4"
        owner="Kutluay Aydın"
        description="Course table with day, time, classroom and student count."
      />
    </>
  )
}
