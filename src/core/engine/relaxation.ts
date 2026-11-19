/**
 * @file relaxation.ts
 * @module core/engine
 *
 * Responsibility: Decides how to enlarge the exam period when no valid schedule
 * exists. Only the period may grow (slots per day first, then days); the hard rules
 * SR-01 and SR-02 are never relaxed.
 *
 * Owner: Alp Salın (CSP Engine) - D4-3
 * References: docs/md/description.md (relaxing constraints), SRS SR-08, Sec. 8
 */
import { NotImplementedError } from '../../shared/errors'
import type { RelaxationStepDto } from '../../shared/ipcTypes'
import type { SchedulerConfig } from '../config/defaults'

/** One enlargement of the exam period. */
export type RelaxationStep = RelaxationStepDto

export interface PeriodSize {
  daysCount: number
  slotsPerDay: number
}

/**
 * Returns the next larger period to try, or null when the configured limits are reached.
 * @param current the period that just failed
 * @param config provides relaxation.maxSlotsPerDay and relaxation.maxDaysCount
 */
export function nextRelaxationStep(
  current: PeriodSize,
  config: SchedulerConfig,
): RelaxationStep | null {
  // TODO [D4-3 | Alp Salın]: Add one slot per day while below relaxation.maxSlotsPerDay, otherwise
  // add one day while below relaxation.maxDaysCount, otherwise return null. Acceptance: with a
  // tight period the engine finds a solution by expanding; at the limit it reports SR-08.
  throw new NotImplementedError('D4-3')
}
