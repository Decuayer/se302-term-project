/**
 * @file ParseError.ts
 * @module core/parser
 *
 * Responsibility: Structured error raised when an input file cannot be read, so the
 * UI can show the file, line and reason instead of crashing (NFR-03).
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-4
 * References: SRS FR-06, NFR-03, Sec. 7 (unsupported format produces a visible error)
 */
import type { ImportIssueDto, InputCategory } from '../../shared/ipcTypes'

export class ParseError extends Error {
  constructor(
    public readonly category: InputCategory,
    public readonly fileName: string,
    /** 1-based line number, or null when the problem concerns the whole file. */
    public readonly lineNumber: number | null,
    public readonly reason: string,
  ) {
    super(lineNumber === null ? `${fileName}: ${reason}` : `${fileName}:${lineNumber}: ${reason}`)
    this.name = 'ParseError'
  }

  /** Converts the error to the DTO shown on the import card (FR-06). */
  toIssue(): ImportIssueDto {
    return {
      severity: 'error',
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      message: this.reason,
    }
  }
}
