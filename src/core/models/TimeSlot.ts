/**
 * @file TimeSlot.ts
 * @module core/models
 *
 * Responsibility: A single exam slot identified by day and slot index.
 *
 * Owner: Alp Salın (CSP Engine) - D4-2
 * References: uml.png (TimeSlot), SRS FR-11, FR-13
 */

export class TimeSlot {
  constructor(
    /** 0-based exam day. */
    public readonly dayIndex: number,
    /** 0-based slot within the day; consecutive slots differ by 1 (SR-02). */
    public readonly slotIndex: number,
    /** Display label, e.g. "09:00" (see DEFAULT_SCHEDULER_CONFIG.slotLabels). */
    public readonly timeLabel: string,
  ) {}
}
