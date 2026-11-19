/**
 * @file index.ts
 * @module core/engine
 *
 * Responsibility: Public entry point of the scheduling engine.
 */
export { ExamSchedulerEngine } from './ExamSchedulerEngine'
export type { ExamSchedulerEngineOptions } from './ExamSchedulerEngine'
export { ConflictGraph } from './ConflictGraph'
export { nextRelaxationStep } from './relaxation'
export type { RelaxationStep, PeriodSize } from './relaxation'
export { scoreCandidate, scoreSchedule } from './scoring'
