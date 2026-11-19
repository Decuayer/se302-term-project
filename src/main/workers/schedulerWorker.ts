/**
 * @file schedulerWorker.ts
 * @module main/workers
 *
 * Responsibility: Worker-thread entry point. Rebuilds the domain models from the
 * serializable payload, runs ExamSchedulerEngine and posts progress and the final
 * result back to the main process as WorkerResponse messages.
 * Bundled as a separate webpack entry (see nextron.config.ts).
 *
 * Owner: Demir Cücü (thread wiring, D1-4); Alp Salın (engine invocation, D4-2)
 * References: architecture.png (Worker Thread: CSP Solver Engine), SRS NFR-02
 */
import { parentPort } from 'node:worker_threads'
import { NotImplementedError } from '../../shared/errors'
import type { WorkerRequest, WorkerResponse, WorkerRunPayload } from '../../shared/ipcTypes'

let cancelRequested = false

/** Passed to ExamSchedulerEngine as `isCancelled`. */
export const isCancelRequested = (): boolean => cancelRequested

/**
 * Runs the engine for one payload and posts the result.
 * @param post sends a WorkerResponse to the main process
 */
export function handleRunRequest(
  payload: WorkerRunPayload,
  post: (message: WorkerResponse) => void,
): void {
  // TODO [D1-4 | Demir Cücü]: Rebuild Student, Course and Classroom instances from the payload,
  // create ExamSchedulerEngine with onProgress -> post({ type: 'progress' }) and
  // isCancelled -> isCancelRequested, then post({ type: 'result', payload }) with the result converted
  // to SchedulerRunResponse (Schedule.toDto, toConflictReportDto). Catch every error and post
  // { type: 'error' } instead of throwing.
  throw new NotImplementedError('D1-4')
}

parentPort?.on('message', (message: WorkerRequest) => {
  if (message.type === 'cancel') {
    cancelRequested = true
    return
  }
  cancelRequested = false
  handleRunRequest(message.payload, (response) => parentPort?.postMessage(response))
})
