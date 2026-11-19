/**
 * @file index.ts
 * @module core/constraints
 *
 * Responsibility: Public entry point of the hard-constraint layer.
 */
export { ScheduleConstraintValidator } from './ScheduleConstraintValidator'
export type { ConstraintViolation, HardRule } from './ScheduleConstraintValidator'
export { generateCandidateSlots, countCandidateSlots } from './candidateSlots'
export type { CandidateAssignment, CandidateContext } from './candidateSlots'
export { buildConflictReport, toConflictReportDto } from './ConflictReport'
export type { ConflictReport, ConflictReason } from './ConflictReport'
