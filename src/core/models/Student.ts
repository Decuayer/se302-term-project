/**
 * @file Student.ts
 * @module core/models
 *
 * Responsibility: Domain model of a student and the courses they are enrolled in.
 * Built by CsvParserService from AllStudents and enriched from AllAttendanceLists.
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-1, D2-3
 * References: uml.png (Student), SRS FR-01, FR-04
 */
import { NotImplementedError } from '../../shared/errors'

export class Student {
  /** Course codes this student is registered in, e.g. "CourseCode_01". */
  public enrolledCourseIds: string[]

  constructor(
    /** Identifier as written in the input file, e.g. "Std_ID_001". */
    public readonly studentId: string,
    enrolledCourseIds: string[] = [],
  ) {
    this.enrolledCourseIds = enrolledCourseIds
  }

  /**
   * Registers this student in a course.
   * @param courseId course code from the attendance file
   */
  addCourse(courseId: string): void {
    // TODO [D2-3 | Mehmet Çağan Karataş]: Append courseId to enrolledCourseIds, ignoring
    // duplicates. Called while mapping AllAttendanceLists (uml.png Student.addCourse).
    throw new NotImplementedError('D2-3')
  }
}
