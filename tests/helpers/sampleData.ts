/**
 * @file sampleData.ts
 * @module tests/helpers
 *
 * Responsibility: Absolute paths of the instructor-provided sample files in data/,
 * shared by all unit tests.
 */
import path from 'node:path'

const DATA_DIR = path.resolve(import.meta.dirname, '../../data')

export const SAMPLE_FILES = {
  students: path.join(DATA_DIR, 'sampleData_AllStudents.csv'),
  courses: path.join(DATA_DIR, 'sampleData_AllCourses.csv'),
  classrooms: path.join(DATA_DIR, 'sampleData_AllClassroomsAndTheirCapacities.csv'),
  attendance: path.join(DATA_DIR, 'sampleData_AllAttendanceLists.csv'),
} as const

/** Known facts about the sample data set, used as test expectations. */
export const SAMPLE_COUNTS = {
  students: 250,
  courses: 20,
  classrooms: 10,
  classroomCapacity: 40,
} as const
