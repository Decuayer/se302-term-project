/**
 * @file navigation.ts
 * @module renderer/components/Layout
 *
 * Responsibility: Navigation entries shown in the sidebar, in the order of the user
 * flow (SRS Sec. 6): dashboard, import, the four result views, help.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 */

import type { ScheduleDto } from '../../../shared/ipcTypes'

export interface NavigationItem {
  href: string
  label: string
  requiresSchedule?: true
  /** SRS requirement the screen fulfils. */
  requirement: string
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '/home', label: 'Dashboard', requirement: 'Sec. 6' },
  { href: '/import', label: 'Import Data', requirement: 'FR-05..FR-08' },
  { href: '/students', requiresSchedule: true, label: 'Students', requirement: 'FR-10' },
  { href: '/courses', requiresSchedule: true, label: 'Courses', requirement: 'FR-11' },
  { href: '/classrooms', requiresSchedule: true, label: 'Classrooms', requirement: 'FR-12' },
  { href: '/daily', requiresSchedule: true, label: 'Daily Slots', requirement: 'FR-13' },
  { href: '/help', label: 'Help', requirement: 'FR-14' },
]

export function isNavigationAvailable(item: NavigationItem, schedule: ScheduleDto | null): boolean {
  return !item.requiresSchedule || schedule !== null
}
