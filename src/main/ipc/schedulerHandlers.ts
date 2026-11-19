/**
 * @file schedulerHandlers.ts
 * @module main/ipc
 *
 * Responsibility: IPC handlers that start and cancel a scheduling run. The run is
 * delegated to the worker thread so the UI stays responsive; progress is pushed to
 * the renderer on the `scheduler:progress` channel.
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-3, D1-4
 * References: architecture.png (ipcRenderer.invoke('scheduler:run'), 'scheduler:progress',
 *             Validated Schedule JSON), SRS FR-08, FR-09, NFR-02
 */
import { ipcMain, type IpcMainInvokeEvent } from 'electron'
import type { DataStore } from '../../core/store/DataStore'
import { NotImplementedError } from '../../shared/errors'
import type { SchedulerRunRequest, SchedulerRunResponse } from '../../shared/ipcTypes'
import type { SchedulerWorkerManager } from '../workers/workerManager'
import { IPC_CHANNELS } from './channels'

export function registerSchedulerHandlers(
  dataStore: DataStore,
  workerManager: SchedulerWorkerManager,
): void {
  ipcMain.handle(IPC_CHANNELS.schedulerRun, (event, request: SchedulerRunRequest) =>
    handleRunScheduler(dataStore, workerManager, event, request),
  )
  ipcMain.handle(IPC_CHANNELS.schedulerCancel, () => handleCancelScheduler(workerManager))
}

async function handleRunScheduler(
  dataStore: DataStore,
  workerManager: SchedulerWorkerManager,
  event: IpcMainInvokeEvent,
  request: SchedulerRunRequest,
): Promise<SchedulerRunResponse> {
  // TODO [D1-3 | Demir Cücü]: Reject when dataStore.isReady() is false (FR-08). Build the payload with
  // dataStore.toWorkerPayload(request.daysCount, request.slotsPerDay), call workerManager.run and
  // forward each progress update with event.sender.send(IPC_CHANNELS.schedulerProgress, progress).
  // Acceptance: the renderer receives SchedulerRunResponse and progress events while the UI stays
  // responsive (SRS Sec. 7).
  throw new NotImplementedError('D1-3')
}

async function handleCancelScheduler(workerManager: SchedulerWorkerManager): Promise<void> {
  // TODO [D1-4 | Demir Cücü]: Call workerManager.cancel().
  throw new NotImplementedError('D1-4')
}
