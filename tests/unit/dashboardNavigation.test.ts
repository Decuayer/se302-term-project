import { describe, expect, it } from 'vitest'
import {
  isNavigationAvailable,
  NAVIGATION_ITEMS,
} from '../../src/renderer/components/Layout/navigation'
import type { ScheduleDto } from '../../src/shared/ipcTypes'

describe('D5-1 navigation', () => {
  it('lists all seven routes in the existing user flow', () => {
    expect(NAVIGATION_ITEMS.map(({ href }) => href)).toEqual([
      '/home',
      '/import',
      '/students',
      '/courses',
      '/classrooms',
      '/daily',
      '/help',
    ])
  })

  it('offers only dashboard, import and help before a schedule exists', () => {
    expect(
      NAVIGATION_ITEMS.filter((item) => isNavigationAvailable(item, null)).map(({ href }) => href),
    ).toEqual(['/home', '/import', '/help'])
  })

  it('unlocks every result view when a schedule exists', () => {
    const schedule: ScheduleDto = { daysCount: 5, slotsPerDay: 4, assignments: [] }
    expect(NAVIGATION_ITEMS.every((item) => isNavigationAvailable(item, schedule))).toBe(true)
  })
})
