/**
 * @file ConflictReport.ts
 * @module core/constraints
 *
 * Responsibility: Explains why no valid schedule could be generated, so the user sees
 * which courses and students block the solution instead of an invalid timetable.
 *
 * Owner: Çağrı Taşöz (Constraint Validation) - D3-6
 * Consumers: Alp Salın (engine failure path, D4-3), Kutluay Aydın (failure toast, D5-5)
 * References: SRS SR-08, FR-09
 */
import { NotImplementedError } from '../../shared/errors'
import type { ConflictReportDto } from '../../shared/ipcTypes'
import type { Course } from '../models/Course'
import type { Schedule } from '../models/Schedule'
import type { ConstraintViolation } from './ScheduleConstraintValidator'

export interface ConflictReason {
  courseId: string
  /** The hard rule that blocked the course, e.g. "SR-01". */
  rule: string
  detail: string
}

export interface ConflictReport {
  blockedCourseIds: string[]
  affectedStudentIds: string[]
  reasons: ConflictReason[]
}

/**
 * Builds a report from the courses the engine could not place.
 * @param blockedCourses courses with no remaining candidate when the search stopped
 * @param partialSchedule the best partial schedule reached
 * @param violations violations observed for the blocked courses
 */
export function buildConflictReport(
  blockedCourses: Course[],
  partialSchedule: Schedule,
  violations: ConstraintViolation[],
): ConflictReport {
  // TODO [D3-6 | Çağrı Taşöz]: Group violations by course, collect the involved students and write
  // one readable reason per blocked course. Acceptance: on failure the UI shows
  // "No valid schedule could be generated" together with this report (SR-08).
  throw new NotImplementedError('D3-6')
}

/** Converts the report to a plain object for IPC. */
export function toConflictReportDto(report: ConflictReport): ConflictReportDto {
  return {
    blockedCourseIds: [...report.blockedCourseIds],
    affectedStudentIds: [...report.affectedStudentIds],
    reasons: report.reasons.map((reason) => ({ ...reason })),
  }
}
