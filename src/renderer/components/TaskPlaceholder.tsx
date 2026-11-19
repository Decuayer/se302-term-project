/**
 * @file TaskPlaceholder.tsx
 * @module renderer/components
 *
 * Responsibility: Temporary marker rendered by skeleton screens and components so the
 * app runs end to end while each task is still open. Remove usages as tasks land.
 *
 * Owner: Demir Cücü (Project skeleton)
 */

interface TaskPlaceholderProps {
  taskId: string
  owner: string
  description: string
}

export function TaskPlaceholder({ taskId, owner, description }: TaskPlaceholderProps) {
  return (
    <div className="rounded-md border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
      <p className="font-medium text-slate-800">
        {taskId} · {owner}
      </p>
      <p className="mt-1">{description}</p>
    </div>
  )
}
