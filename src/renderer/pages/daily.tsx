/**
 * @file daily.tsx
 * @module renderer/pages
 *
 * Responsibility: Daily Slot Matrix view. Overall timetable with days as columns and
 * slots as rows; each cell lists the exams held in that slot.
 *
 * Owner: Utku Durmaz (Frontend - Matrix & Student) - D6-2
 * References: architecture.png (Daily Slot Matrix View), SRS FR-13
 */
import Head from 'next/head'
import { PageHeader } from '../components/PageHeader'
import { TaskPlaceholder } from '../components/TaskPlaceholder'

export default function DailyPage() {
  // TODO [D6-2 | Utku Durmaz]: Build a grid of schedule.daysCount columns x schedule.slotsPerDay rows
  // and place a SlotCard for every assignment in its cell. Acceptance: every exam appears exactly once
  // and the number of cards equals the number of courses.
  return (
    <>
      <Head>
        <title>Daily Slots - Exam Scheduler</title>
      </Head>
      <PageHeader title="Daily Slot Matrix" subtitle="All exams by day and time slot." />
      <TaskPlaceholder
        taskId="D6-2"
        owner="Utku Durmaz"
        description="Day x slot grid filled with exam cards."
      />
    </>
  )
}
