/**
 * @file CsvParserService.ts
 * @module core/parser
 *
 * Responsibility: Reads the four input files (SRS Section 5) and turns them into
 * domain models. Runs in the Electron main process; never in the renderer.
 *
 * Input formats (see data/ for samples):
 *   - AllStudents:   heading line, then one student ID per line ("Std_ID_001")
 *   - AllCourses:    heading line, then one course code per line ("CourseCode_01")
 *   - AllClassroomsAndTheirCapacities: heading line (contains ';'), then "Classroom_01;40"
 *     (values may carry trailing whitespace, e.g. "Classroom_02;40 ")
 *   - AllAttendanceLists: repeated blocks of
 *       CourseCode_01
 *       ['Std_ID_170', 'Std_ID_077', ...]
 *       <blank line>
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-1, D2-2, D2-3
 * References: uml.png (CsvParserService), SRS FR-01..FR-04, Sec. 5
 */
import { NotImplementedError } from '../../shared/errors'
import type { Classroom } from '../models/Classroom'
import type { Course } from '../models/Course'
import type { Student } from '../models/Student'

/** Course code -> registered student IDs, as read from AllAttendanceLists. */
export type AttendanceMap = Map<string, string[]>

export class CsvParserService {
  /**
   * FR-01: parse AllStudents.
   * @param filePath absolute path of the selected file
   * @returns one Student per non-empty line after the heading
   * @throws ParseError when the file is empty or unreadable
   */
  parseStudents(filePath: string): Student[] {
    // TODO [D2-1 | Mehmet Çağan Karataş]: Read the file as UTF-8, skip the heading line
    // ("ALL OF THE STUDENTS IN THE SYSTEM"), trim each line, ignore blank lines and warn on
    // duplicate IDs. Acceptance: the sample file yields 250 students and no heading entry.
    throw new NotImplementedError('D2-1')
  }

  /**
   * FR-02: parse AllCourses.
   * @param filePath absolute path of the selected file
   * @returns one Course per non-empty line after the heading
   * @throws ParseError when the file is empty or unreadable
   */
  parseCourses(filePath: string): Course[] {
    // TODO [D2-1 | Mehmet Çağan Karataş]: Same rules as parseStudents. Acceptance: the sample
    // file yields 20 courses (CourseCode_01..CourseCode_20).
    throw new NotImplementedError('D2-1')
  }

  /**
   * FR-03: parse AllClassroomsAndTheirCapacities (semicolon separated).
   * @param filePath absolute path of the selected file
   * @returns one Classroom per "id;capacity" line
   * @throws ParseError with the line number when a capacity is not a positive integer
   */
  parseClassrooms(filePath: string): Classroom[] {
    // TODO [D2-2 | Mehmet Çağan Karataş]: Skip the heading line (it also contains ';'), split each
    // line on ';', trim both parts and validate the capacity. Acceptance: the sample file yields
    // 10 classrooms with capacity 40; "Classroom_02;40 " is accepted.
    throw new NotImplementedError('D2-2')
  }

  /**
   * FR-04: parse AllAttendanceLists.
   * @param filePath absolute path of the selected file
   * @returns map from course code to registered student IDs
   * @throws ParseError for blocks that cannot be read (reported, then skipped)
   */
  parseAttendance(filePath: string): AttendanceMap {
    // TODO [D2-3 | Mehmet Çağan Karataş]: Parse "course line / bracketed list line / blank line"
    // blocks, strip brackets, quotes and whitespace, and collect unreadable entries as issues
    // (SRS Sec. 5 note). Acceptance: all 20 sample courses are mapped to their student lists.
    throw new NotImplementedError('D2-3')
  }

  /**
   * Reads a text file and returns its lines without line terminators.
   * Shared by all parse methods; handles BOM and CRLF line endings.
   */
  protected readLines(filePath: string): string[] {
    // TODO [D2-1 | Mehmet Çağan Karataş]: Read with fs.readFileSync(filePath, 'utf8'), strip a
    // UTF-8 BOM if present and split on /\r?\n/.
    throw new NotImplementedError('D2-1')
  }
}
