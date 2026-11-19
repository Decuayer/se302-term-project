/**
 * @file workerManager.ts
 * @module main/workers
 *
 * Responsibility: Starts the scheduler worker thread, relays its progress/result
 * messages to the caller, and supports cancellation and timeouts, so the CSP solver
 * never blocks the Electron main thread (NFR-02).
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-4
 * References: architecture.png (Main Process & Worker Thread), SRS NFR-02, FR-09
 */
import path from 'node:path'
import type { Worker } from 'node:worker_threads'
import { NotImplementedError } from '../../shared/errors'
import type {
  SchedulerProgress,
  SchedulerRunResponse,
  WorkerRunPayload,
} from '../../shared/ipcTypes'

/** Bundled worker file emitted next to main.js (see nextron.config.ts). */
export const SCHEDULER_WORKER_PATH = path.join(import.meta.dirname, 'schedulerWorker.js')

export interface WorkerRunOptions {
  onProgress?: (progress: SchedulerProgress) => void
  /** Abort the run after this many milliseconds. */
  timeoutMs?: number
}

export class SchedulerWorkerManager {
  protected activeWorker: Worker | null = null

  /**
   * Runs one scheduling job in a new worker thread.
   * @returns the worker's result; rejects only on unexpected worker crashes
   */
  run(payload: WorkerRunPayload, options: WorkerRunOptions = {}): Promise<SchedulerRunResponse> {
    // TODO [D1-4 | Demir Cücü]: Create new Worker(SCHEDULER_WORKER_PATH), post { type: 'run', payload },
    // forward 'progress' messages to options.onProgress, resolve on 'result', convert 'error' and
    // worker 'error'/'exit' events into a failed SchedulerRunResponse. Only one run at a time.
    // Acceptance: a worker error never crashes the application.
    throw new NotImplementedError('D1-4')
  }

  /** Stops the active run, if any. */
  async cancel(): Promise<void> {
    // TODO [D1-4 | Demir Cücü]: Post { type: 'cancel' }, then terminate the worker if it does not
    // finish within a short grace period.
    throw new NotImplementedError('D1-4')
  }

  isRunning(): boolean {
    return this.activeWorker !== null
  }
}
