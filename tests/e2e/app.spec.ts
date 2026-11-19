/**
 * End-to-end tests driving the packaged Electron app with Playwright.
 * Owner: Utku Durmaz - D6-6
 * Covers the acceptance checks in SRS Section 7. Un-skip each test as the features land.
 * Requires a production build first: npm run build:nopack
 */
import path from 'node:path'
import { _electron as electron, expect, test } from '@playwright/test'

// Launch from the project root so app.getAppPath() matches the packaged layout
// (launching app/main.js directly makes electron-serve look in app/app).
const PROJECT_ROOT = path.resolve(import.meta.dirname, '../..')

test.describe('Exam Scheduler', () => {
  test.skip('opens the dashboard', async () => {
    // TODO [D6-6 | Utku Durmaz]: Launch, wait for the first window and assert the Dashboard heading.
    const app = await electron.launch({
      args: [PROJECT_ROOT],
      env: { ...process.env, NODE_ENV: 'production' },
    })
    const window = await app.firstWindow()
    await expect(window.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
    await app.close()
  })

  test.skip('imports the four sample files and generates a schedule', async () => {
    // TODO [D6-6 | Utku Durmaz]: Import data/*.csv, click Generate Schedule, assert success and check
    // the Students, Courses, Classrooms and Daily Slots views (SRS Sec. 7).
  })

  test.skip('shows a visible error for an unsupported file', async () => {
    // TODO [D6-6 | Utku Durmaz]: Import an invalid file and assert the card shows "rejected" with a
    // readable reason (SRS Sec. 7, NFR-03).
  })

  test.skip('keeps the interface usable while scheduling', async () => {
    // TODO [D6-6 | Utku Durmaz]: Start a run and navigate between pages while progress is shown
    // (NFR-02).
  })
})
