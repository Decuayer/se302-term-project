/**
 * Unit tests for the hard constraints (at least 15 scenarios required by D3-5).
 * Owner: Çağrı Taşöz - D3-1, D3-2, D3-3, D3-4, D3-5, D3-6
 * Replace each it.todo with a real test when the task is implemented.
 */
import { describe, it } from 'vitest'

describe('Rule 1 - no consecutive slots (SR-02) [D3-1]', () => {
  it.todo('rejects an exam in the slot right after another exam of the same student')
  it.todo('rejects an exam in the slot right before another exam of the same student')
  it.todo('accepts an exam with one empty slot in between')
  it.todo('does not treat the last slot of a day and the first slot of the next day as consecutive')
})

describe('SR-04 - no two exams in the same slot [D3-1]', () => {
  it.todo('rejects two exams of one student in the same slot')
})

describe('Rule 2 - at most two exams per day (SR-01) [D3-2]', () => {
  it.todo('accepts a second exam on the same day')
  it.todo('rejects a third exam on the same day')
  it.todo('keeps counters correct after an assignment is undone')
})

describe('Rule 3 - classroom capacity and overlap (SR-03, SR-05) [D3-3]', () => {
  it.todo('accepts a course whose student count equals the room capacity')
  it.todo('rejects a course larger than the room capacity')
  it.todo('rejects a second exam in the same room and slot')
})

describe('generateCandidateSlots [D3-4]', () => {
  it.todo('returns only candidates that satisfy every hard rule')
  it.todo('returns an empty list when no placement is possible')
})

describe('validateFullSchedule [D3-5]', () => {
  it.todo('reports zero violations for a valid schedule')
  it.todo('reports every violation in an invalid schedule')
})

describe('buildConflictReport [D3-6]', () => {
  it.todo('lists blocked courses, affected students and the violated rule')
})
