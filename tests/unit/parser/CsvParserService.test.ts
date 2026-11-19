/**
 * Unit tests for CsvParserService and input validation.
 * Owner: Mehmet Çağan Karataş - D2-1, D2-2, D2-3, D2-4
 * Replace each it.todo with a real test when the task is implemented.
 */
import { describe, it } from 'vitest'

describe('CsvParserService.parseStudents [D2-1]', () => {
  it.todo('reads 250 students from the sample file')
  it.todo('skips the heading line and blank lines')
  it.todo('reports duplicate student IDs as warnings')
})

describe('CsvParserService.parseCourses [D2-1]', () => {
  it.todo('reads 20 courses from the sample file')
})

describe('CsvParserService.parseClassrooms [D2-2]', () => {
  it.todo('reads 10 classrooms with capacity 40 from the sample file')
  it.todo('accepts trailing whitespace such as "Classroom_02;40 "')
  it.todo('rejects a non-numeric capacity with the line number')
})

describe('CsvParserService.parseAttendance [D2-3]', () => {
  it.todo('maps all 20 sample courses to their student lists')
  it.todo('normalizes brackets, quotes and whitespace')
  it.todo('reports unreadable blocks and continues')
})

describe('validation [D2-4]', () => {
  it.todo('rejects an unsupported file extension with a visible error')
  it.todo('detects a file uploaded to the wrong category')
  it.todo('reports unknown course and student IDs in the attendance file')
})
