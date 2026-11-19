/**
 * @file Schedule.ts
 * @module core/models
 *
 * Responsibility: The full set of exam assignments and the query methods that feed
 * the four result views (student, course, classroom, daily slot).
 *
 * Owner: Alp Salın (CSP Engine) - D4-2
 * Consumers: Kutluay Aydın (D5-3, D5-4), Utku Durmaz (D6-1, D6-2)
 * References: uml.png (Schedule), SRS FR-10..FR-13
 */
import { NotImplementedError } from '../../shared/errors'
import type { ScheduleDto } from '../../shared/ipcTypes'
import type { ExamAssignment } from './ExamAssignment'

export class Schedule {
  constructor(
    public readonly daysCount: number,
    public readonly slotsPerDay: number,
    public assignments: ExamAssignment[] = [],
  ) {}

  /**
   * FR-10: all exams of one student.
   * @returns assignments whose studentIds contain studentId, ordered by day and slot
   */
  getExamsByStudent(studentId: string): ExamAssignment[] {
    // TODO [D4-2 | Alp Salın]: Filter assignments by studentId and sort by (dayIndex, slotIndex).
    // Acceptance: selecting a student shows only that student's exams (SRS Sec. 7).
    throw new NotImplementedError('D4-2')
  }

  /**
   * FR-12: all exams held in one classroom.
   * @returns assignments for classroomId, ordered by day and slot
   */
  getExamsByClassroom(classroomId: string): ExamAssignment[] {
    // TODO [D4-2 | Alp Salın]: Filter assignments by classroomId and sort by (dayIndex, slotIndex).
    throw new NotImplementedError('D4-2')
  }

  /**
   * FR-11: the exam of one course.
   * @returns the course's assignment, or undefined if the course is not scheduled
   */
  getExamsByCourse(courseId: string): ExamAssignment | undefined {
    // TODO [D4-2 | Alp Salın]: Return the assignment of courseId. If T-0 allows multi-room
    // courses, change the return type to ExamAssignment[] and update uml.png.
    throw new NotImplementedError('D4-2')
  }

  /**
   * FR-13: all exams in a given day and slot.
   */
  getExamsByDayAndSlot(day: number, slot: number): ExamAssignment[] {
    // TODO [D4-2 | Alp Salın]: Return assignments whose timeSlot matches (day, slot).
    throw new NotImplementedError('D4-2')
  }

  /** Converts the schedule to a plain object that can cross the IPC boundary. */
  toDto(): ScheduleDto {
    // TODO [D4-2 | Alp Salın]: Map every ExamAssignment and TimeSlot to plain objects
    // (see ScheduleDto in src/shared/ipcTypes.ts). Classes cannot be sent over IPC.
    throw new NotImplementedError('D4-2')
  }
}
