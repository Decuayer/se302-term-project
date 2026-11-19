/**
 * @file defaults.ts
 * @module core/config
 *
 * Responsibility: Central place for scheduling parameters and limits. Values here
 * are placeholders until the team finalizes the open items in SRS Section 8.
 *
 * Owner: Whole team (T-0); maintained by Alp Salın (CSP Engine)
 * References: SRS Sec. 8, SR-01, SR-02, docs/md/description.md (5 days x 4 slots example)
 */

export interface SchedulerConfig {
  /** Number of exam days in the period. */
  daysCount: number
  /** Number of exam slots in a single day. */
  slotsPerDay: number
  /** Display label of each slot; length must equal slotsPerDay. */
  slotLabels: string[]
  /** SR-01: hard limit, must never be relaxed. */
  maxExamsPerStudentPerDay: number
  /** SR-02: minimum distance between two exam slots of a student on the same day. */
  minSlotGapPerStudent: number
  /** Upper bounds used by the relaxation engine (D4-3). */
  relaxation: {
    maxSlotsPerDay: number
    maxDaysCount: number
  }
  /** Weights of the optimization score (D4-4). */
  scoringWeights: {
    dayBalance: number
    classroomUsage: number
  }
}

// TODO [T-0 | Whole team]: Confirm the default exam days, slots per day, slot time labels
// and relaxation limits, then update these values and the SRS (Section 8).
// TODO [T-0 | Whole team]: Decide whether one course may be split across several classrooms
// (affects ExamAssignment.classroomId and ScheduleConstraintValidator.checkRoomCapacity).
export const DEFAULT_SCHEDULER_CONFIG: SchedulerConfig = {
  daysCount: 5,
  slotsPerDay: 4,
  slotLabels: ['09:00', '11:30', '14:00', '16:30'],
  maxExamsPerStudentPerDay: 2,
  minSlotGapPerStudent: 2,
  relaxation: {
    maxSlotsPerDay: 6,
    maxDaysCount: 10,
  },
  scoringWeights: {
    dayBalance: 1,
    classroomUsage: 1,
  },
}
