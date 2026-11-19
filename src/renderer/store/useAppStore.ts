/**
 * @file useAppStore.ts
 * @module renderer/store
 *
 * Responsibility: Global UI state shared by all screens: import status of the four
 * input files, scheduling parameters and status, the last schedule and the toast
 * queue. All data comes from the main process through `window.api`.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 * Consumers: every page under src/renderer/pages
 * References: SRS FR-06..FR-13, Sec. 6
 */
import { create } from 'zustand'
import type {
  ImportStatusMap,
  InputCategory,
  ScheduleDto,
  SchedulerProgress,
  SchedulerRunResponse,
} from '../../shared/ipcTypes'

export interface ToastMessage {
  id: number
  kind: 'success' | 'error' | 'warning' | 'info'
  text: string
}

export interface AppState {
  importStatus: ImportStatusMap | null
  daysCount: number
  slotsPerDay: number
  progress: SchedulerProgress
  lastResult: SchedulerRunResponse | null
  schedule: ScheduleDto | null
  toasts: ToastMessage[]

  refreshImportStatus(): Promise<void>
  importFile(category: InputCategory, filePath: string): Promise<void>
  removeFile(category: InputCategory): Promise<void>
  setPeriod(daysCount: number, slotsPerDay: number): void
  runScheduler(): Promise<void>
  cancelScheduler(): Promise<void>
  pushToast(kind: ToastMessage['kind'], text: string): void
  dismissToast(id: number): void
}

const notImplemented = (taskId: string): never => {
  throw new Error(`Not implemented yet (task ${taskId}).`)
}

export const useAppStore = create<AppState>()(() => ({
  importStatus: null,
  // TODO [T-0 | Whole team]: Keep in sync with DEFAULT_SCHEDULER_CONFIG (src/core/config/defaults.ts).
  daysCount: 5,
  slotsPerDay: 4,
  progress: { phase: 'idle', percent: null, message: '' },
  lastResult: null,
  schedule: null,
  toasts: [],

  // TODO [D5-2 | Kutluay Aydın]: Load window.api.getImportStatus() into importStatus.
  refreshImportStatus: async () => notImplemented('D5-2'),
  // TODO [D5-2 | Kutluay Aydın]: Call window.api.importFile and update the matching category.
  importFile: async () => notImplemented('D5-2'),
  // TODO [D5-2 | Kutluay Aydın]: Call window.api.removeFile and replace importStatus (FR-07).
  removeFile: async () => notImplemented('D5-2'),
  // TODO [D5-2 | Kutluay Aydın]: Validate positive integers and store the period.
  setPeriod: () => notImplemented('D5-2'),
  // TODO [D5-5 | Kutluay Aydın]: Subscribe to window.api.onSchedulerProgress, call
  // window.api.runScheduler, store lastResult/schedule and push a success, warning (relaxation
  // applied) or error toast (FR-09, SR-08).
  runScheduler: async () => notImplemented('D5-5'),
  // TODO [D5-5 | Kutluay Aydın]: Call window.api.cancelScheduler and reset progress.
  cancelScheduler: async () => notImplemented('D5-5'),
  // TODO [D5-5 | Kutluay Aydın]: Append a toast with an incrementing id.
  pushToast: () => notImplemented('D5-5'),
  // TODO [D5-5 | Kutluay Aydın]: Remove the toast with the given id.
  dismissToast: () => notImplemented('D5-5'),
}))
