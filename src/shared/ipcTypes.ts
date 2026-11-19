/**
 * @file ipcTypes.ts
 * @module shared
 *
 * Responsibility: Type-only contract between the renderer (Next.js), the preload
 * bridge and the Electron main process. Everything that crosses the IPC boundary
 * is a plain, serializable DTO; domain classes (src/core/models) never cross it.
 * This file must contain types only so it can be imported with `import type`
 * from the preload script and the renderer without bundling issues.
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-3
 * Consumers: Mehmet Çağan Karataş (import/export), Kutluay Aydın & Utku Durmaz (views)
 * References: architecture.png (Security & IPC Layer), SRS FR-05..FR-13
 */

// ---------------------------------------------------------------------------
// Import (FR-01..FR-07)
// ---------------------------------------------------------------------------

/** The four input files described in SRS Section 5. */
export type InputCategory = 'students' | 'courses' | 'classrooms' | 'attendance'

/** File state shown on each import card (FR-06). */
export type FileStatus = 'missing' | 'selected' | 'accepted' | 'rejected'

/** A single readable problem found while importing a file (NFR-03). */
export interface ImportIssueDto {
  severity: 'error' | 'warning'
  fileName: string
  /** 1-based line number, or null when the issue concerns the whole file. */
  lineNumber: number | null
  message: string
}

/** Current state of one input category. */
export interface ImportFileState {
  category: InputCategory
  status: FileStatus
  filePath: string | null
  /** Number of records read (students, courses, classrooms or course lists). */
  recordCount: number
  issues: ImportIssueDto[]
}

export type ImportStatusMap = Record<InputCategory, ImportFileState>

export interface ImportFileRequest {
  category: InputCategory
  filePath: string
}

// ---------------------------------------------------------------------------
// Scheduling (FR-08, FR-09, SR-01..SR-08)
// ---------------------------------------------------------------------------

export interface SchedulerRunRequest {
  daysCount: number
  slotsPerDay: number
}

export type SchedulerPhase =
  | 'idle'
  | 'preparing'
  | 'searching'
  | 'relaxing'
  | 'optimizing'
  | 'completed'
  | 'failed'
  | 'cancelled'

/** Payload of the `scheduler:progress` channel. */
export interface SchedulerProgress {
  phase: SchedulerPhase
  /** 0-100, or null when progress cannot be estimated. */
  percent: number | null
  message: string
}

export interface TimeSlotDto {
  dayIndex: number
  slotIndex: number
  timeLabel: string
}

export interface ExamAssignmentDto {
  courseId: string
  classroomId: string
  timeSlot: TimeSlotDto
  studentIds: string[]
}

export interface ScheduleDto {
  daysCount: number
  slotsPerDay: number
  assignments: ExamAssignmentDto[]
}

export interface RelaxationStepDto {
  kind: 'addSlotPerDay' | 'addDay'
  daysCount: number
  slotsPerDay: number
}

export interface ConflictReportDto {
  /** Courses that could not be placed. */
  blockedCourseIds: string[]
  /** Students involved in the blocking conflicts. */
  affectedStudentIds: string[]
  /** Human-readable explanation per blocked course. */
  reasons: { courseId: string; rule: string; detail: string }[]
}

export interface ScheduleStatsDto {
  elapsedMs: number
  backtrackCount: number
  usedClassroomCount: number
  usedDayCount: number
  score: number | null
}

/** Response of the `scheduler:run` channel. */
export interface SchedulerRunResponse {
  success: boolean
  schedule: ScheduleDto | null
  relaxationsApplied: RelaxationStepDto[]
  conflictReport: ConflictReportDto | null
  stats: ScheduleStatsDto | null
  errorMessage: string | null
}

// ---------------------------------------------------------------------------
// Export (D2-5, D2-6)
// ---------------------------------------------------------------------------

export type ExportFormat = 'csv' | 'xlsx' | 'pdf'

export interface ExportResult {
  saved: boolean
  filePath: string | null
}

// ---------------------------------------------------------------------------
// Menu events (D1-2)
// ---------------------------------------------------------------------------

export type MenuCommand = 'open-import' | 'open-help' | 'open-about'

// ---------------------------------------------------------------------------
// API exposed on `window.api` by the preload script (D1-3)
// ---------------------------------------------------------------------------

export type Unsubscribe = () => void

export interface ElectronApi {
  importFile(request: ImportFileRequest): Promise<ImportFileState>
  removeFile(category: InputCategory): Promise<ImportStatusMap>
  getImportStatus(): Promise<ImportStatusMap>
  runScheduler(request: SchedulerRunRequest): Promise<SchedulerRunResponse>
  cancelScheduler(): Promise<void>
  onSchedulerProgress(callback: (progress: SchedulerProgress) => void): Unsubscribe
  exportSchedule(format: ExportFormat): Promise<ExportResult>
  onMenuCommand(callback: (command: MenuCommand) => void): Unsubscribe
}

// ---------------------------------------------------------------------------
// Main process <-> worker thread messages (D1-4)
// ---------------------------------------------------------------------------

export type WorkerRequest = { type: 'run'; payload: WorkerRunPayload } | { type: 'cancel' }

/** Raw domain input handed to the worker; built from the DataStore. */
export interface WorkerRunPayload {
  studentIds: string[]
  courses: { courseId: string; enrolledStudentIds: string[] }[]
  classrooms: { classroomId: string; capacity: number }[]
  daysCount: number
  slotsPerDay: number
}

export type WorkerResponse =
  | { type: 'progress'; payload: SchedulerProgress }
  | { type: 'result'; payload: SchedulerRunResponse }
  | { type: 'error'; payload: { message: string } }
