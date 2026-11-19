/**
 * @file AppLayout.tsx
 * @module renderer/components/Layout
 *
 * Responsibility: Application shell shared by every page: sidebar, content area,
 * scheduling progress bar and toast area.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 * References: architecture.png (Views Container), SRS Sec. 6, NFR-04
 */
import type { ReactNode } from 'react'
import { SchedulerProgress } from '../SchedulerProgress'
import { ToastContainer } from '../Toast'
import { Sidebar } from './Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  // TODO [D1-2 | Demir Cücü]: Subscribe to window.api.onMenuCommand here and route 'open-help' and
  // 'open-import' to the matching pages.
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-y-auto p-6">
        <SchedulerProgress />
        {children}
      </main>
      <ToastContainer />
    </div>
  )
}
