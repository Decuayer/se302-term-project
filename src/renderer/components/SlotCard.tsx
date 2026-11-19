/**
 * @file SlotCard.tsx
 * @module renderer/components
 *
 * Responsibility: Compact card for one exam inside a day/slot cell of the daily
 * matrix (course code, classroom, student count).
 *
 * Owner: Utku Durmaz (Frontend - Matrix & Student) - D6-2
 * References: SRS FR-13
 */
import type { ExamAssignmentDto } from '../../shared/ipcTypes'

export interface SlotCardProps {
  assignment: ExamAssignmentDto
  onSelect?(courseId: string): void
}

export function SlotCard({ assignment }: SlotCardProps) {
  // TODO [D6-2 | Utku Durmaz]: Style the card, show the student count and call onSelect to open the
  // course details. Keep it readable when several exams share one cell (NFR-04).
  return (
    <div className="rounded border border-slate-200 bg-white px-2 py-1 text-xs">
      {assignment.courseId} · {assignment.classroomId}
    </div>
  )
}
