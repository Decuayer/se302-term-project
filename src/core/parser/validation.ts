/**
 * @file validation.ts
 * @module core/parser
 *
 * Responsibility: Input sanitization and validation rules applied before and after
 * parsing, producing readable issues instead of crashes (NFR-03).
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-4
 * References: SRS FR-06, NFR-03, Sec. 5, Sec. 7
 */
import { NotImplementedError } from '../../shared/errors'
import type { ImportIssueDto, InputCategory } from '../../shared/ipcTypes'
import type { Classroom } from '../models/Classroom'
import type { Course } from '../models/Course'
import type { Student } from '../models/Student'
import type { AttendanceMap } from './CsvParserService'

/** File extensions accepted by the import screen. */
export const ACCEPTED_EXTENSIONS = ['.csv', '.txt'] as const

/**
 * Checks that a file exists, is not empty, has an accepted extension and is readable as UTF-8.
 * @returns a list of issues; empty when the file can be parsed
 */
export function validateFileBasics(filePath: string, category: InputCategory): ImportIssueDto[] {
  // TODO [D2-4 | Mehmet Çağan Karataş]: Check existence, size > 0, extension in
  // ACCEPTED_EXTENSIONS and UTF-8 decodability. Acceptance: an unsupported format produces a
  // visible error (SRS Sec. 7).
  throw new NotImplementedError('D2-4')
}

/**
 * Detects a file dropped into the wrong category (e.g. classrooms file as students).
 * @param lines the file's lines as returned by CsvParserService.readLines
 */
export function detectCategoryMismatch(
  lines: string[],
  expected: InputCategory,
): ImportIssueDto | null {
  // TODO [D2-4 | Mehmet Çağan Karataş]: Use the heading line and the first data rows to guess the
  // category and return an error issue if it differs from `expected`.
  throw new NotImplementedError('D2-4')
}

/**
 * Cross-file consistency: every course and student in the attendance file must exist
 * in the courses and students files.
 */
export function validateCrossReferences(
  students: Student[],
  courses: Course[],
  attendance: AttendanceMap,
): ImportIssueDto[] {
  // TODO [D2-4 | Mehmet Çağan Karataş]: Report unknown course codes and student IDs found in
  // the attendance map, and courses with no registered students (warning).
  throw new NotImplementedError('D2-4')
}

/**
 * Feasibility pre-check before scheduling: the largest course must fit in the available rooms.
 */
export function validateCapacityFeasibility(
  courses: Course[],
  classrooms: Classroom[],
): ImportIssueDto[] {
  // TODO [D2-4 | Mehmet Çağan Karataş]: Warn when a course has more students than the largest
  // room (or than total capacity, depending on the T-0 multi-room decision).
  throw new NotImplementedError('D2-4')
}
