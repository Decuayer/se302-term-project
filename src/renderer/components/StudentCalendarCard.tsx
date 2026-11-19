/**
 * @file StudentCalendarCard.tsx
 * @module renderer/components
 *
 * Responsibility: One day of a student's exam calendar. Shows every slot of the day,
 * marks exam slots, highlights the empty slots between exams and displays the
 * daily exam count badge (x / 2), so compliance with SR-01 and SR-02 is visible.
 *
 * Owner: Utku Durmaz (Frontend - Matrix & Student) - D6-3
 * References: SRS SR-01, SR-02, FR-10
 */
import type { ExamAssignmentDto } from '../../shared/ipcTypes'
import { TaskPlaceholder } from './TaskPlaceholder'

export interface StudentCalendarCardProps {
  dayIndex: number
  slotLabels: string[]
  /** The student's exams on this day. */
  exams: ExamAssignmentDto[]
}

export function StudentCalendarCard({ dayIndex }: StudentCalendarCardProps) {
  // TODO [D6-3 | Utku Durmaz]: Render one row per slot label, fill exam slots, visually mark the gap
  // slots between exams and show the "count / 2" badge. Acceptance: Rule 1 and Rule 2 compliance
  // can be verified visually.
  return (
    <div className="rounded border border-slate-200 bg-white p-3">
      <p className="mb-2 text-sm font-medium">Day {dayIndex + 1}</p>
      <TaskPlaceholder
        taskId="D6-3"
        owner="Utku Durmaz"
        description="Slot timeline with gap highlighting."
      />
    </div>
  )
}
