/**
 * @file ExamAssignment.ts
 * @module core/models
 *
 * Responsibility: The placement of one course exam into a classroom and time slot.
 *
 * Owner: Alp Salın (CSP Engine) - D4-2
 * References: uml.png (ExamAssignment), SRS FR-11, SR-03
 */
import type { TimeSlot } from './TimeSlot'

export class ExamAssignment {
  constructor(
    public readonly courseId: string,
    // TODO [T-0 | Whole team]: If a course may be split across rooms, replace this with
    // classroomIds: string[] and update the UML diagram accordingly.
    public readonly classroomId: string,
    public readonly timeSlot: TimeSlot,
    /** Students sitting this exam (copied from Course.enrolledStudentIds). */
    public readonly studentIds: string[],
  ) {}
}
