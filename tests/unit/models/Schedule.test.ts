/**
 * Unit tests for the domain models and Schedule query methods.
 * Owners: Mehmet Çağan Karataş (Student, Course, Classroom - D2-1..D2-3),
 *         Alp Salın (Schedule - D4-2)
 * Replace each it.todo with a real test when the task is implemented.
 */
import { describe, it } from 'vitest'

describe('Student / Course [D2-3]', () => {
  it.todo('Student.addCourse ignores duplicate course codes')
  it.todo('Course.registeredCount equals the number of unique students')
})

describe('Schedule queries [D4-2]', () => {
  it.todo("getExamsByStudent returns only that student's exams ordered by day and slot")
  it.todo("getExamsByClassroom returns only that room's exams")
  it.todo('getExamsByCourse returns the course assignment')
  it.todo('getExamsByDayAndSlot returns every exam in that slot')
  it.todo('toDto produces a plain serializable object')
})
