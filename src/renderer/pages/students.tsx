/**
 * @file students.tsx
 * @module renderer/pages
 *
 * Responsibility: Student Schedule view. Search for a student ID and list that
 * student's exams (day, time, course, classroom), with a calendar view per day.
 *
 * Owner: Utku Durmaz (Frontend - Matrix & Student) - D6-1
 * References: architecture.png (Student Schedule View), SRS FR-10, Sec. 7
 */
import Head from 'next/head'
import { PageHeader } from '../components/PageHeader'
import { TaskPlaceholder } from '../components/TaskPlaceholder'

export default function StudentsPage() {
  // TODO [D6-1 | Utku Durmaz]: Add a search box with autocomplete over all student IDs, filter
  // useAppStore.schedule.assignments by studentIds, render the result with DataTable and one
  // StudentCalendarCard per day (D6-3). Acceptance: selecting a student shows only that student's
  // exams.
  return (
    <>
      <Head>
        <title>Students - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="Student Schedules"
        subtitle="Find a student to see their exam timetable."
      />
      <TaskPlaceholder
        taskId="D6-1"
        owner="Utku Durmaz"
        description="Student search with autocomplete and the student's exam list."
      />
    </>
  )
}
