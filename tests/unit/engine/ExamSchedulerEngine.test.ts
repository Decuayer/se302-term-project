/**
 * Unit tests for the scheduling engine.
 * Owner: Alp Salın - D4-1, D4-2, D4-3, D4-4, D4-5
 * Replace each it.todo with a real test when the task is implemented.
 */
import { describe, it } from 'vitest'

describe('ConflictGraph [D4-1]', () => {
  it.todo('builds a 20-node graph from the sample attendance data')
  it.todo('orders courses deterministically by degree, size and code')
})

describe('ExamSchedulerEngine.generateSchedule [D4-2]', () => {
  it.todo('produces a schedule with zero hard-constraint violations on the sample data')
  it.todo('never returns an invalid timetable as a success (SR-08)')
})

describe('relaxation [D4-3]', () => {
  it.todo('adds slots per day before adding days')
  it.todo('finds a solution for a period that is initially too small')
  it.todo('returns null at the configured limits')
})

describe('scoring [D4-4]', () => {
  it.todo('scores a balanced schedule better than an unbalanced one')
})

describe('performance [D4-5]', () => {
  it.todo('solves the sample data in under 5 seconds')
})
