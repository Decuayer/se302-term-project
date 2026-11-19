/**
 * @file preload.ts
 * @module main
 *
 * Responsibility: Secure bridge between the renderer and the main process. Exposes
 * the typed `window.api` object via contextBridge; the renderer gets no direct
 * access to Node.js or Electron APIs (contextIsolation on, nodeIntegration off).
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-3
 * References: architecture.png (Preload Script / contextBridge), SRS NFR-02
 */
import { contextBridge } from 'electron'
import type { ElectronApi } from '../shared/ipcTypes'

// TODO [D1-3 | Demir Cücü]: Implement every method with ipcRenderer.invoke / ipcRenderer.on using
// IPC_CHANNELS from ./ipc/channels. Subscriptions must return an unsubscribe function that calls
// ipcRenderer.removeListener. Acceptance: runScheduler() resolves with SchedulerRunResponse and
// progress events reach the UI.
const notImplemented = (taskId: string): never => {
  throw new Error(`Not implemented yet (task ${taskId}).`)
}

const api: ElectronApi = {
  importFile: () => notImplemented('D1-3'),
  removeFile: () => notImplemented('D1-3'),
  getImportStatus: () => notImplemented('D1-3'),
  runScheduler: () => notImplemented('D1-3'),
  cancelScheduler: () => notImplemented('D1-3'),
  onSchedulerProgress: () => notImplemented('D1-3'),
  exportSchedule: () => notImplemented('D1-3'),
  onMenuCommand: () => notImplemented('D1-2'),
}

contextBridge.exposeInMainWorld('api', api)
