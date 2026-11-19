/**
 * @file errors.ts
 * @module shared
 *
 * Responsibility: Shared error types used across the main process, the worker and
 * the domain layer. `NotImplementedError` marks skeleton stubs so that calling an
 * unfinished function fails loudly and points to the owning task.
 *
 * Owner: Demir Cücü (Project skeleton)
 */

/** Thrown by every skeleton stub until the linked task is implemented. */
export class NotImplementedError extends Error {
  constructor(public readonly taskId: string) {
    super(`Not implemented yet (task ${taskId}).`)
    this.name = 'NotImplementedError'
  }
}
