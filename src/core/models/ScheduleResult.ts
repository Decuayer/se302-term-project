/**
 * @file ScheduleResult.ts
 * @module core/models
 *
 * Responsibility: Outcome of ExamSchedulerEngine.generateSchedule(): either a valid
 * schedule or the reason no valid schedule exists (SR-08).
 *
 * Owner: Alp Salın (CSP Engine) - D4-2, D4-3
 * References: uml.png (ExamSchedulerEngine.generateSchedule), SRS FR-09, SR-08
 */
import type { ScheduleStatsDto } from '../../shared/ipcTypes'
import type { ConflictReport } from '../constraints/ConflictReport'
import type { RelaxationStep } from '../engine/relaxation'
import type { Schedule } from './Schedule'

export interface ScheduleResult {
  /** True only when every hard constraint is satisfied (SR-08). */
  success: boolean
  /** The schedule, or null when success is false. Never an invalid timetable. */
  schedule: Schedule | null
  /** Relaxations applied to find a solution (D4-3); empty if none were needed. */
  relaxationsApplied: RelaxationStep[]
  /** Explanation for the user when success is false (D3-6). */
  conflictReport: ConflictReport | null
  stats: ScheduleStatsDto
}
