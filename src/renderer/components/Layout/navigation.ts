/**
 * @file navigation.ts
 * @module renderer/components/Layout
 *
 * Responsibility: Navigation entries shown in the sidebar, in the order of the user
 * flow (SRS Sec. 6): dashboard, import, the four result views, help.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 */

export interface NavigationItem {
  href: string
  label: string
  /** SRS requirement the screen fulfils. */
  requirement: string
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '/home', label: 'Dashboard', requirement: 'Sec. 6' },
  { href: '/import', label: 'Import Data', requirement: 'FR-05..FR-08' },
  { href: '/students', label: 'Students', requirement: 'FR-10' },
  { href: '/courses', label: 'Courses', requirement: 'FR-11' },
  { href: '/classrooms', label: 'Classrooms', requirement: 'FR-12' },
  { href: '/daily', label: 'Daily Slots', requirement: 'FR-13' },
  { href: '/help', label: 'Help', requirement: 'FR-14' },
]
