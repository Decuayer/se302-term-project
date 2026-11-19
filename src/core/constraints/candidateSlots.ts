/**
 * @file candidateSlots.ts
 * @module core/constraints
 *
 * Responsibility: Generates every (time slot, classroom) option that is valid for a
 * course given the current partial schedule. The engine uses the result both as
 * its value domain and as the MRV measure (fewest candidates first).
 *
 * Owner: Çağrı Taşöz (Constraint Validation) - D3-4
 * Consumers: Alp Salın (ExamSchedulerEngine, D4-2; scoring, D4-4)
 * References: architecture.png (Hard Constraint Checker), SRS SR-01..SR-05
 */
import { NotImplementedError } from '../../shared/errors'
import type { SchedulerConfig } from '../config/defaults'
import type { Classroom } from '../models/Classroom'
import type { Course } from '../models/Course'
import type { Schedule } from '../models/Schedule'
import type { Student } from '../models/Student'
import type { TimeSlot } from '../models/TimeSlot'
import type { ScheduleConstraintValidator } from './ScheduleConstraintValidator'

/** One valid placement option for a course. */
export interface CandidateAssignment {
  timeSlot: TimeSlot
  classroom: Classroom
}

export interface CandidateContext {
  schedule: Schedule
  classrooms: Classroom[]
  /** Lookup of students by ID, to check the per-student rules. */
  studentsById: Map<string, Student>
  validator: ScheduleConstraintValidator
  config: SchedulerConfig
}

/**
 * Lists every placement of `course` that satisfies all hard constraints.
 * @returns candidates in a stable order (day, slot, classroom); an empty array means
 *          the course has no valid placement (dead end for the engine)
 */
export function generateCandidateSlots(
  course: Course,
  context: CandidateContext,
): CandidateAssignment[] {
  // TODO [D3-4 | Çağrı Taşöz]: For every (day, slot) in the period and every classroom, keep the
  // option only if checkRoomCapacity, checkRoomAvailable, checkMaxExamsPerDay and
  // checkNoConsecutiveSlots pass for all enrolled students. Acceptance: every returned candidate
  // satisfies all hard constraints.
  throw new NotImplementedError('D3-4')
}

/** Number of valid placements, used by the engine for MRV ordering. */
export function countCandidateSlots(course: Course, context: CandidateContext): number {
  // TODO [D3-4 | Çağrı Taşöz]: Count without allocating the full candidate list if possible.
  throw new NotImplementedError('D3-4')
}
