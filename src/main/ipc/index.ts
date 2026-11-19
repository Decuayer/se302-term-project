/**
 * @file index.ts
 * @module main/ipc
 *
 * Responsibility: Registers every IPC handler once at application start-up.
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-3
 */
import type { ExportService } from '../../core/export/ExportService'
import type { Schedule } from '../../core/models/Schedule'
import type { DataStore } from '../../core/store/DataStore'
import type { SchedulerWorkerManager } from '../workers/workerManager'
import { registerExportHandlers } from './exportHandlers'
import { registerImportHandlers } from './importHandlers'
import { registerSchedulerHandlers } from './schedulerHandlers'

export interface IpcDependencies {
  dataStore: DataStore
  workerManager: SchedulerWorkerManager
  exportService: ExportService
  getLastSchedule: () => Schedule | null
}

export function registerIpcHandlers(dependencies: IpcDependencies): void {
  registerImportHandlers(dependencies.dataStore)
  registerSchedulerHandlers(dependencies.dataStore, dependencies.workerManager)
  registerExportHandlers(dependencies.exportService, dependencies.getLastSchedule)
}
