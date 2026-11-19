/**
 * @file ScheduleConstraintValidator.ts
 * @module core/constraints
 *
 * Responsibility: Hard-constraint checks used by the CSP engine before every
 * assignment, and a full-schedule audit used by tests and before results are shown.
 *
 * Hard constraints (never relaxed):
 *   Rule 1 (SR-02): a student never has exams in consecutive slots on the same day.
 *   Rule 2 (SR-01): a student has at most two exams per day.
 *   SR-04:          a student never has two exams in the same slot.
 *   Rule 3 (SR-03, SR-05): a room is never over capacity or double-booked.
 *
 * Owner: Çağrı Taşöz (Constraint Validation) - D3-1, D3-2, D3-3, D3-5
 * Consumers: Alp Salın (ExamSchedulerEngine, D4-2)
 * References: uml.png (ScheduleConstraintValidator), architecture.png (Hard Constraint Checker),
 *             docs/md/description.md, SRS SR-01..SR-05, Sec. 7
 */
import { NotImplementedError } from '../../shared/errors'
import { DEFAULT_SCHEDULER_CONFIG, type SchedulerConfig } from '../config/defaults'
import type { Classroom } from '../models/Classroom'
import type { Schedule } from '../models/Schedule'
import type { Student } from '../models/Student'
import type { TimeSlot } from '../models/TimeSlot'

export type HardRule = 'SR-01' | 'SR-02' | 'SR-03' | 'SR-04' | 'SR-05'

/** A single hard-constraint violation found in a schedule. */
export interface ConstraintViolation {
  rule: HardRule
  courseId: string
  /** Student involved (SR-01, SR-02, SR-04) or null for room rules. */
  studentId: string | null
  /** Room involved (SR-03, SR-05) or null for student rules. */
  classroomId: string | null
  message: string
}

export class ScheduleConstraintValidator {
  constructor(protected readonly config: SchedulerConfig = DEFAULT_SCHEDULER_CONFIG) {}

  /**
   * Rule 1 (SR-02) and SR-04: placing `student` in `slot` must not put them in the same
   * slot as, or a slot adjacent to, another of their exams on the same day.
   * @returns true when the placement is allowed
   */
  checkNoConsecutiveSlots(student: Student, slot: TimeSlot, currentSchedule: Schedule): boolean {
    // TODO [D3-1 | Çağrı Taşöz]: For every existing exam of the student on slot.dayIndex, require
    // |slotIndex - existing.slotIndex| >= config.minSlotGapPerStudent. The last slot of one day and
    // the first slot of the next day are NOT consecutive. Keep a studentId -> (day, slot)[] index
    // for O(1) lookups. Acceptance: consecutive or same-slot placements return false.
    throw new NotImplementedError('D3-1')
  }

  /**
   * Rule 2 (SR-01): `student` may have at most config.maxExamsPerStudentPerDay exams on `day`.
   * @returns true when one more exam on `day` is allowed
   */
  checkMaxExamsPerDay(student: Student, day: number, currentSchedule: Schedule): boolean {
    // TODO [D3-2 | Çağrı Taşöz]: Count the student's exams on `day`; allow only if the count is
    // below config.maxExamsPerStudentPerDay. Counters must stay correct after backtracking.
    // Acceptance: a third exam on the same day is rejected.
    throw new NotImplementedError('D3-2')
  }

  /**
   * Rule 3 (SR-03): the room must seat every student of the exam.
   * @returns true when studentCount <= room.capacity
   */
  checkRoomCapacity(room: Classroom, studentCount: number): boolean {
    // TODO [D3-3 | Çağrı Taşöz]: Compare studentCount with room.capacity. If T-0 allows splitting a
    // course across rooms, add an overload that checks the combined capacity of several rooms.
    throw new NotImplementedError('D3-3')
  }

  /**
   * Rule 3 (SR-05): the room must not already host an exam in `slot`.
   */
  checkRoomAvailable(room: Classroom, slot: TimeSlot, currentSchedule: Schedule): boolean {
    // TODO [D3-3 | Çağrı Taşöz]: Return false if any assignment uses room.classroomId at
    // (slot.dayIndex, slot.slotIndex). Maintain a (day, slot, room) occupancy table.
    throw new NotImplementedError('D3-3')
  }

  /**
   * Audits a complete schedule against every hard rule.
   * @param students all students, used to look up each student's exams
   * @param classrooms all rooms, used for capacity checks
   * @returns every violation found; an empty array means the schedule is valid
   */
  validateFullSchedule(
    schedule: Schedule,
    students: Student[],
    classrooms: Classroom[],
  ): ConstraintViolation[] {
    // TODO [D3-5 | Çağrı Taşöz]: Scan every student and room and report each SR-01..SR-05
    // violation. Used by unit tests and by the engine before returning success (SR-08).
    throw new NotImplementedError('D3-5')
  }
}
