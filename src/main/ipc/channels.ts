/**
 * @file channels.ts
 * @module main/ipc
 *
 * Responsibility: Single source of truth for IPC channel names. Lives under
 * src/main because both the main process and the preload script need the values
 * at runtime (Nextron only bundles src/main for preload). The renderer never uses
 * channel names directly; it calls `window.api` (see src/shared/ipcTypes.ts).
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-3
 * References: architecture.png (ipcRenderer.invoke('scheduler:run'), 'scheduler:progress')
 */

export const IPC_CHANNELS = {
  importFile: 'data:import-file',
  removeFile: 'data:remove-file',
  getImportStatus: 'data:get-status',
  schedulerRun: 'scheduler:run',
  schedulerProgress: 'scheduler:progress',
  schedulerCancel: 'scheduler:cancel',
  exportSchedule: 'export:schedule',
  menuCommand: 'menu:command',
} as const

export type IpcChannel = (typeof IPC_CHANNELS)[keyof typeof IPC_CHANNELS]
