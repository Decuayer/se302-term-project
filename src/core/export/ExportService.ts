/**
 * @file ExportService.ts
 * @module core/export
 *
 * Responsibility: Writes a generated schedule to CSV, Excel (.xlsx) and printable
 * HTML (turned into PDF by the main process with webContents.printToPDF).
 * Every export contains the same four perspectives as the UI: by course, by
 * classroom, by student and by day/slot.
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-5, D2-6
 * References: SRS FR-10..FR-13 (views mirrored in exports)
 */
import { NotImplementedError } from '../../shared/errors'
import type { Schedule } from '../models/Schedule'

/** A flat table ready to be written as CSV or as an Excel sheet. */
export interface ExportTable {
  name: 'Courses' | 'Classrooms' | 'Students' | 'DailySlots'
  headers: string[]
  rows: string[][]
}

export class ExportService {
  /** Converts the schedule into the four tables shared by every export format. */
  buildTables(schedule: Schedule): ExportTable[] {
    // TODO [D2-5 | Mehmet Çağan Karataş]: Build Courses (course, day, time, classroom, students),
    // Classrooms (classroom, day, time, course), Students (student, day, time, course, classroom)
    // and DailySlots (day, time, course, classroom) tables using Schedule query methods.
    throw new NotImplementedError('D2-5')
  }

  /**
   * Writes one CSV file per table into `outputDir`.
   * @returns the paths of the written files
   */
  async exportCsv(schedule: Schedule, outputDir: string): Promise<string[]> {
    // TODO [D2-5 | Mehmet Çağan Karataş]: Write UTF-8 CSV files with proper quoting.
    // Acceptance: files open in Excel and match the UI.
    throw new NotImplementedError('D2-5')
  }

  /** Writes a single .xlsx workbook with one sheet per table. */
  async exportExcel(schedule: Schedule, filePath: string): Promise<void> {
    // TODO [D2-5 | Mehmet Çağan Karataş]: Use exceljs to create one worksheet per ExportTable with a
    // bold header row and auto-sized columns.
    throw new NotImplementedError('D2-5')
  }

  /**
   * Builds a self-contained HTML document for PDF printing.
   * The main process loads it in a hidden window and calls printToPDF (see exportHandlers).
   */
  buildPrintableHtml(schedule: Schedule): string {
    // TODO [D2-6 | Mehmet Çağan Karataş]: Render a title, generation date and the day/slot matrix
    // as HTML tables with print CSS (page breaks between sections). Acceptance: the PDF is readable
    // and contains every exam.
    throw new NotImplementedError('D2-6')
  }
}
