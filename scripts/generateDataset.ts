/**
 * @file generateDataset.ts
 * @module scripts
 *
 * Responsibility: Generates synthetic input files in the same four formats as data/
 * for stress tests and benchmarks.
 * Usage: npm run dataset:generate -- --students 2000 --courses 120 --classrooms 40 --out tmp/large
 *
 * Owner: Alp Salın (CSP Engine) - D4-6
 */

export interface DatasetOptions {
  students: number
  courses: number
  classrooms: number
  classroomCapacity: number
  coursesPerStudent: number
  outDir: string
}

export function generateDataset(options: DatasetOptions): void {
  // TODO [D4-6 | Alp Salın]: Write AllStudents, AllCourses, AllClassroomsAndTheirCapacities and
  // AllAttendanceLists files to options.outDir using exactly the formats of data/ (heading lines,
  // ';' separator, bracketed attendance lists). Use a seeded random generator for reproducibility.
  throw new Error('Not implemented yet (task D4-6).')
}

// TODO [D4-6 | Alp Salın]: Parse process.argv into DatasetOptions and call generateDataset.
console.log('Dataset generator is not implemented yet (task D4-6).')
