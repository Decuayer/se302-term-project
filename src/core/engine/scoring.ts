/**
 * @file scoring.ts
 * @module core/engine
 *
 * Responsibility: Soft-goal scoring used to choose between valid placements and to
 * compare complete schedules. Lower is better. Soft goals never override hard rules.
 *   SR-06: spread exams evenly across the available days (day load balancing).
 *   SR-07: avoid unnecessary classroom usage (classroom minimization).
 *
 * Owner: Alp Salın (CSP Engine) - D4-4
 * References: architecture.png (Optimization & Soft Heuristics), SRS SR-06, SR-07
 */
import { NotImplementedError } from '../../shared/errors'
import type { SchedulerConfig } from '../config/defaults'
import type { CandidateAssignment } from '../constraints/candidateSlots'
import type { Schedule } from '../models/Schedule'

/**
 * Cost of adding `candidate` to `schedule`; used to order values (least-constraining first).
 */
export function scoreCandidate(
  candidate: CandidateAssignment,
  schedule: Schedule,
  config: SchedulerConfig,
): number {
  // TODO [D4-4 | Alp Salın]: Combine the increase in per-day exam variance and whether the room is
  // newly used, weighted by config.scoringWeights.
  throw new NotImplementedError('D4-4')
}

/**
 * Overall quality of a complete schedule.
 * Acceptance: an optimized run scores better than an unoptimized baseline on the sample data.
 */
export function scoreSchedule(schedule: Schedule, config: SchedulerConfig): number {
  // TODO [D4-4 | Alp Salın]: Weighted sum of the variance of exams per day and the number of
  // distinct classrooms used.
  throw new NotImplementedError('D4-4')
}
