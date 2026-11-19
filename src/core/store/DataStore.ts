/**
 * @file DataStore.ts
 * @module core/store
 *
 * Responsibility: In-memory state of the imported data ("Data Store / In-Memory State"
 * in architecture.png). Holds the parsed models per input category, tracks each
 * file's status for the import screen, and supports replacing or removing a file
 * before generating the schedule (FR-07).
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-3, D2-4
 * Consumers: Demir Cücü (IPC handlers, D1-3), Alp Salın (engine input, D4-2)
 * References: architecture.png, SRS FR-06, FR-07, FR-08
 */
import { NotImplementedError } from '../../shared/errors'
import type {
  ImportFileState,
  ImportStatusMap,
  InputCategory,
  WorkerRunPayload,
} from '../../shared/ipcTypes'
import type { Classroom } from '../models/Classroom'
import type { Course } from '../models/Course'
import type { Student } from '../models/Student'
import type { AttendanceMap } from '../parser/CsvParserService'

export class DataStore {
  private students: Student[] = []
  private courses: Course[] = []
  private classrooms: Classroom[] = []
  private attendance: AttendanceMap = new Map()

  /**
   * Parses and stores the file for one category, replacing any previous file (FR-07).
   * @returns the new state of that category, including issues for rejected files
   */
  importFile(category: InputCategory, filePath: string): ImportFileState {
    // TODO [D2-4 | Mehmet Çağan Karataş]: Run validateFileBasics, call the matching
    // CsvParserService method, store the result and set status 'accepted' or 'rejected'.
    // Parse errors must be caught and reported, never thrown to the UI (NFR-03).
    throw new NotImplementedError('D2-4')
  }

  /** Clears one category so another file can be selected (FR-07). */
  removeFile(category: InputCategory): void {
    // TODO [D2-4 | Mehmet Çağan Karataş]: Reset the stored data and status of `category` to 'missing'.
    throw new NotImplementedError('D2-4')
  }

  /** Status of all four categories for the import screen (FR-06). */
  getStatus(): ImportStatusMap {
    // TODO [D2-4 | Mehmet Çağan Karataş]: Return one ImportFileState per category.
    throw new NotImplementedError('D2-4')
  }

  /** FR-08: scheduling may start only when all four files are accepted. */
  isReady(): boolean {
    // TODO [D2-4 | Mehmet Çağan Karataş]: True when every category is 'accepted' and
    // validateCrossReferences reports no errors.
    throw new NotImplementedError('D2-4')
  }

  /**
   * Links students and courses using the attendance map (Course.enrolledStudentIds,
   * Student.enrolledCourseIds).
   */
  linkEnrollments(): void {
    // TODO [D2-3 | Mehmet Çağan Karataş]: For each (courseId, studentIds) in attendance, fill
    // Course.enrolledStudentIds and call Student.addCourse. Unknown IDs are reported by D2-4.
    throw new NotImplementedError('D2-3')
  }

  /** Builds the serializable input sent to the scheduler worker (D1-4). */
  toWorkerPayload(daysCount: number, slotsPerDay: number): WorkerRunPayload {
    // TODO [D2-3 | Mehmet Çağan Karataş]: Map students, courses and classrooms to plain objects.
    throw new NotImplementedError('D2-3')
  }

  getStudents(): Student[] {
    return this.students
  }

  getCourses(): Course[] {
    return this.courses
  }

  getClassrooms(): Classroom[] {
    return this.classrooms
  }

  getAttendance(): AttendanceMap {
    return this.attendance
  }
}
