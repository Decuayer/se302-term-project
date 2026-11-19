/**
 * @file window.d.ts
 * @module renderer/types
 *
 * Responsibility: Declares the `window.api` bridge exposed by src/main/preload.ts.
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-3
 */
import type { ElectronApi } from '../../shared/ipcTypes'

declare global {
  interface Window {
    api: ElectronApi
  }
}

export {}
