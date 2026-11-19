/**
 * @file Course.ts
 * @module core/models
 *
 * Responsibility: Domain model of a course whose exam must be scheduled, including
 * the students registered to it.
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-1, D2-3
 * References: uml.png (Course), SRS FR-02, FR-04
 */

export class Course {
  /** Student identifiers registered to this course (from AllAttendanceLists). */
  public enrolledStudentIds: string[]

  constructor(
    /** Course code as written in the input file, e.g. "CourseCode_01". */
    public readonly courseId: string,
    /** Display name; the sample data has no names, so it defaults to the code. */
    public readonly courseName: string = courseId,
    enrolledStudentIds: string[] = [],
  ) {
    this.enrolledStudentIds = enrolledStudentIds
  }

  /** Number of registered students (uml.png Course.registeredCount). */
  get registeredCount(): number {
    // TODO [D2-3 | Mehmet Çağan Karataş]: Return the number of unique registered students.
    // Acceptance: matches the length of the course's list in AllAttendanceLists.
    return 0
  }
}
