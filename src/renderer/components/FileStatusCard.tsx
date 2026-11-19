/**
 * @file FileStatusCard.tsx
 * @module renderer/components
 *
 * Responsibility: One card per input category on the import screen. Accepts a file by
 * picker or drag-and-drop, shows its status (missing / selected / accepted /
 * rejected), record count and validation issues, and offers replace/remove actions.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-2
 * References: SRS FR-05, FR-06, FR-07, Sec. 5, Sec. 6 steps 2-3
 */
import type { ImportFileState, InputCategory } from '../../shared/ipcTypes'
import { TaskPlaceholder } from './TaskPlaceholder'

export interface FileStatusCardProps {
  category: InputCategory
  title: string
  /** Short description of the expected format (SRS Sec. 5). */
  formatHint: string
  state: ImportFileState | null
  onFileSelected(category: InputCategory, filePath: string): void
  onRemove(category: InputCategory): void
}

export function FileStatusCard({ category, title, formatHint }: FileStatusCardProps) {
  // TODO [D5-2 | Kutluay Aydın]: Implement a drop zone and a hidden <input type="file">. Electron
  // exposes the absolute path through webUtils.getPathForFile (add it to window.api in D1-3).
  // Show the status badge, record count and each issue (file, line, message). Replace and Remove
  // buttons call onFileSelected / onRemove. Acceptance: an invalid file is shown as rejected with
  // an explanation; a file can be replaced and re-imported.
  return (
    <section className="rounded-md border border-slate-200 bg-white p-4" data-category={category}>
      <h2 className="font-medium">{title}</h2>
      <p className="mb-3 text-xs text-slate-500">{formatHint}</p>
      <TaskPlaceholder
        taskId="D5-2"
        owner="Kutluay Aydın"
        description="Drag-and-drop area, status badge and validation messages."
      />
    </section>
  )
}
