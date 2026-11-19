/**
 * @file exportHandlers.ts
 * @module main/ipc
 *
 * Responsibility: IPC handler that saves the last generated schedule as CSV, Excel
 * or PDF. Shows the native save dialog and delegates content generation to the
 * ExportService; PDF uses a hidden window and webContents.printToPDF.
 *
 * Owner: Mehmet Çağan Karataş (Data Parsing & I/O) - D2-5, D2-6
 * Collaborator: Demir Cücü (IPC wiring, D1-3)
 * References: SRS FR-10..FR-13 (exported views)
 */
import { ipcMain, type IpcMainInvokeEvent } from 'electron'
import type { ExportService } from '../../core/export/ExportService'
import type { Schedule } from '../../core/models/Schedule'
import { NotImplementedError } from '../../shared/errors'
import type { ExportFormat, ExportResult } from '../../shared/ipcTypes'
import { IPC_CHANNELS } from './channels'

export function registerExportHandlers(
  exportService: ExportService,
  getLastSchedule: () => Schedule | null,
): void {
  ipcMain.handle(IPC_CHANNELS.exportSchedule, (event, format: ExportFormat) =>
    handleExportSchedule(exportService, getLastSchedule, event, format),
  )
}

async function handleExportSchedule(
  exportService: ExportService,
  getLastSchedule: () => Schedule | null,
  event: IpcMainInvokeEvent,
  format: ExportFormat,
): Promise<ExportResult> {
  // TODO [D2-5 | Mehmet Çağan Karataş]: Ask for a location with dialog.showSaveDialog, then call
  // exportService.exportCsv / exportExcel. Return { saved: false } if the user cancels.
  // TODO [D2-6 | Mehmet Çağan Karataş]: For 'pdf', load exportService.buildPrintableHtml(schedule) in
  // a hidden BrowserWindow and write webContents.printToPDF() to the chosen path.
  throw new NotImplementedError('D2-5')
}
