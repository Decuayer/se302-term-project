/**
 * @file SchedulerProgress.tsx
 * @module renderer/components
 *
 * Responsibility: Live progress bar shown while the scheduler runs, with the current
 * phase (searching, relaxing, optimizing) and a cancel button.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-5
 * References: SRS FR-09, NFR-02, Sec. 7 (interface remains usable during scheduling)
 */
import { useAppStore } from '../store/useAppStore'

export function SchedulerProgress() {
  const progress = useAppStore((state) => state.progress)

  if (progress.phase === 'idle') {
    return null
  }

  // TODO [D5-5 | Kutluay Aydın]: Render a determinate bar when percent is a number and an
  // indeterminate bar otherwise, show progress.message and a Cancel button calling
  // useAppStore.cancelScheduler. Acceptance: progress is visible during scheduling and the user
  // is notified when it finishes or fails (FR-09).
  return (
    <div className="mb-4 rounded bg-white p-3 text-sm" role="status">
      Scheduling: {progress.phase}
    </div>
  )
}
