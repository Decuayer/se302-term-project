/**
 * @file Toast.tsx
 * @module renderer/components
 *
 * Responsibility: Stack of transient notifications (success, error, warning, info)
 * for import results, scheduling outcome and export results.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-5
 * References: SRS FR-06, FR-09, SR-08, NFR-03
 */
import { useAppStore } from '../store/useAppStore'

export function ToastContainer() {
  const toasts = useAppStore((state) => state.toasts)

  // TODO [D5-5 | Kutluay Aydın]: Render each toast with a color per kind, auto-dismiss after a few
  // seconds (except errors) and a close button calling dismissToast. Failure toasts must say
  // "No valid schedule could be generated" and link to the conflict report (SR-08).
  return (
    <div
      className="pointer-events-none fixed right-4 bottom-4 flex flex-col gap-2"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto rounded bg-white p-3 text-sm shadow">
          {toast.text}
        </div>
      ))}
    </div>
  )
}
