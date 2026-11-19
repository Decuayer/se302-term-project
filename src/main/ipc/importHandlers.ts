/**
 * @file importHandlers.ts
 * @module main/ipc
 *
 * Responsibility: IPC handlers for selecting, replacing and removing input files.
 * Delegates parsing and validation to the DataStore; never throws parse errors to
 * the renderer (NFR-03).
 *
 * Owner: Demir Cücü (IPC wiring, D1-3); Mehmet Çağan Karataş (validation behavior, D2-4)
 * References: architecture.png ("File Dropped (CSV Path)"), SRS FR-05, FR-06, FR-07
 */
import { ipcMain, type IpcMainInvokeEvent } from 'electron'
import type { DataStore } from '../../core/store/DataStore'
import { NotImplementedError } from '../../shared/errors'
import type {
  ImportFileRequest,
  ImportFileState,
  ImportStatusMap,
  InputCategory,
} from '../../shared/ipcTypes'
import { IPC_CHANNELS } from './channels'

export function registerImportHandlers(dataStore: DataStore): void {
  ipcMain.handle(IPC_CHANNELS.importFile, (event, request: ImportFileRequest) =>
    handleImportFile(dataStore, event, request),
  )
  ipcMain.handle(IPC_CHANNELS.removeFile, (event, category: InputCategory) =>
    handleRemoveFile(dataStore, event, category),
  )
  ipcMain.handle(IPC_CHANNELS.getImportStatus, () => handleGetImportStatus(dataStore))
}

async function handleImportFile(
  dataStore: DataStore,
  event: IpcMainInvokeEvent,
  request: ImportFileRequest,
): Promise<ImportFileState> {
  // TODO [D1-3 | Demir Cücü]: Validate the request shape (category is one of the four, filePath is
  // an absolute path) and return dataStore.importFile(request.category, request.filePath).
  throw new NotImplementedError('D1-3')
}

async function handleRemoveFile(
  dataStore: DataStore,
  event: IpcMainInvokeEvent,
  category: InputCategory,
): Promise<ImportStatusMap> {
  // TODO [D1-3 | Demir Cücü]: Call dataStore.removeFile(category) and return dataStore.getStatus().
  throw new NotImplementedError('D1-3')
}

async function handleGetImportStatus(dataStore: DataStore): Promise<ImportStatusMap> {
  // TODO [D1-3 | Demir Cücü]: Return dataStore.getStatus().
  throw new NotImplementedError('D1-3')
}
