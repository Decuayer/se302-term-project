/**
 * @file ConflictGraph.ts
 * @module core/engine
 *
 * Responsibility: Course conflict graph. Two courses are adjacent when at least one
 * student is registered in both; the edge weight is the number of shared students.
 * The graph drives variable ordering (MRV / degree heuristic) in the engine.
 *
 * Owner: Alp Salın (CSP Engine) - D4-1
 * References: architecture.png (CSP Algorithm Pipeline), data/sampleData_AllAttendanceLists.csv
 */
import { NotImplementedError } from '../../shared/errors'
import type { Course } from '../models/Course'

export class ConflictGraph {
  /** courseId -> (neighbor courseId -> number of shared students) */
  protected readonly adjacency = new Map<string, Map<string, number>>()

  constructor(protected readonly courses: Course[]) {}

  /** Builds the adjacency map from Course.enrolledStudentIds. */
  build(): void {
    // TODO [D4-1 | Alp Salın]: Index studentId -> courseIds, then add a weighted edge for every pair
    // of courses sharing a student. Acceptance: the sample data produces a 20-node graph.
    throw new NotImplementedError('D4-1')
  }

  /** Courses that share at least one student with `courseId`. */
  getNeighbors(courseId: string): string[] {
    // TODO [D4-1 | Alp Salın]: Return the keys of adjacency.get(courseId), or [] if none.
    throw new NotImplementedError('D4-1')
  }

  /** Number of students registered in both courses (0 if not adjacent). */
  getSharedStudentCount(courseIdA: string, courseIdB: string): number {
    // TODO [D4-1 | Alp Salın]: Return the edge weight between the two courses.
    throw new NotImplementedError('D4-1')
  }

  /** Number of conflicting courses of `courseId`. */
  getDegree(courseId: string): number {
    // TODO [D4-1 | Alp Salın]: Return the neighbor count of courseId.
    throw new NotImplementedError('D4-1')
  }

  /**
   * Courses ordered for the search: highest degree first, ties broken by larger
   * registeredCount, then by courseId so the order is deterministic.
   */
  getOrderedCourses(): Course[] {
    // TODO [D4-1 | Alp Salın]: Sort a copy of `courses` by (degree desc, registeredCount desc,
    // courseId asc). Acceptance: the ordering is identical across runs.
    throw new NotImplementedError('D4-1')
  }
}
