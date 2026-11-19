/**
 * @file Classroom.ts
 * @module core/models
 *
 * Responsibility: Domain model of an exam room and its seating capacity, plus the
 * slots in which it is already occupied.
 *
 * Owner: Mehmet Çağan Karataş (model, D2-2); Çağrı Taşöz (availability rule, D3-3)
 * References: uml.png (Classroom), SRS FR-03, SR-03, SR-05
 */
import { NotImplementedError } from '../../shared/errors'

export class Classroom {
  constructor(
    /** Identifier as written in the input file, e.g. "Classroom_01". */
    public readonly classroomId: string,
    /** Number of seats; must be a positive integer. */
    public readonly capacity: number,
  ) {}

  /**
   * Whether the room is free in the given slot.
   * @param dayIndex 0-based exam day
   * @param slotIndex 0-based slot within the day
   * @returns true when no exam is assigned to this room at (dayIndex, slotIndex)
   */
  isAvailable(dayIndex: number, slotIndex: number): boolean {
    // TODO [D3-3 | Çağrı Taşöz]: Check the (day, slot) occupancy of this room so that the
    // same room is never assigned to overlapping exams (SR-05). Decide with Alp Salın whether
    // occupancy lives here or in Schedule (uml.png keeps the method on Classroom).
    throw new NotImplementedError('D3-3')
  }
}
