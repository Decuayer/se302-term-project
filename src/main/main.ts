/**
 * @file main.ts
 * @module main
 *
 * Responsibility: Electron main-process entry point. Creates the application
 * window, wires the domain services (DataStore, worker manager, ExportService) into
 * the IPC layer and loads the Next.js renderer (dev server in development, static
 * export via the app:// protocol in production).
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-1
 * References: architecture.png (Electron Main Process), SRS NFR-01
 *
 * TODO [D1-1 | Demir Cücü]: Push the skeleton to GitHub, enable branch protection on main and
 * develop (PR + passing CI required), and confirm every teammate can run `npm run dev`.
 */
import path from 'node:path'
import { app } from 'electron'
import serve from 'electron-serve'
import { ExportService } from '../core/export/ExportService'
import type { Schedule } from '../core/models/Schedule'
import { DataStore } from '../core/store/DataStore'
import { createWindow } from './helpers/createWindow'
import { registerIpcHandlers } from './ipc'
import { SchedulerWorkerManager } from './workers/workerManager'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

const dataStore = new DataStore()
const workerManager = new SchedulerWorkerManager()
const exportService = new ExportService()
// TODO [D1-3 | Demir Cücü]: Store the last successful Schedule here when a run completes so the
// export handlers can use it.
const lastSchedule: Schedule | null = null

registerIpcHandlers({
  dataStore,
  workerManager,
  exportService,
  getLastSchedule: () => lastSchedule,
})

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1280,
    height: 800,
    minWidth: 960,
    minHeight: 600,
    title: 'Exam Scheduler',
    webPreferences: {
      preload: path.join(import.meta.dirname, 'preload.js'),
    },
  })

  // TODO [D1-2 | Demir Cücü]: Menu.setApplicationMenu(buildApplicationMenu(mainWindow)) once
  // src/main/menu.ts is implemented.

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})
