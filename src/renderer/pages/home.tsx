/**
 * Dashboard for import readiness, the latest scheduling result and available views (D5-1).
 */
import Head from 'next/head'
import Link from 'next/link'
import type { FileStatus, InputCategory, ScheduleStatsDto } from '../../shared/ipcTypes'
import { isNavigationAvailable, NAVIGATION_ITEMS } from '../components/Layout/navigation'
import { PageHeader } from '../components/PageHeader'
import { useAppStore } from '../store/useAppStore'

const INPUT_CATEGORIES: { category: InputCategory; label: string }[] = [
  { category: 'students', label: 'Students' },
  { category: 'courses', label: 'Courses' },
  { category: 'classrooms', label: 'Classrooms' },
  { category: 'attendance', label: 'Attendance Lists' },
]

const STATUS_LABELS: Record<FileStatus, string> = {
  missing: 'Missing',
  selected: 'Selected',
  accepted: 'Accepted',
  rejected: 'Rejected',
}

const STATS: { key: keyof ScheduleStatsDto; label: string }[] = [
  { key: 'elapsedMs', label: 'Elapsed time (ms)' },
  { key: 'backtrackCount', label: 'Backtracks' },
  { key: 'usedClassroomCount', label: 'Classrooms used' },
  { key: 'usedDayCount', label: 'Days used' },
  { key: 'score', label: 'Score' },
]

const formatNumber = new Intl.NumberFormat('en', { maximumFractionDigits: 3 })

export default function HomePage() {
  const importStatus = useAppStore((state) => state.importStatus)
  const lastResult = useAppStore((state) => state.lastResult)
  const schedule = useAppStore((state) => state.schedule)

  return (
    <div className="exam-dashboard">
      <Head>
        <title>Dashboard - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="Dashboard"
        subtitle="Review your input files and the latest exam scheduling result."
      />

      <section className="exam-glass exam-panel" aria-labelledby="import-summary">
        <div className="exam-panel-heading">
          <h2 id="import-summary">Import status</h2>
          <Link href="/import" className="exam-primary-action">
            Import Data
          </Link>
        </div>
        {importStatus === null && <p className="exam-muted">No import status yet.</p>}
        <ul className="exam-import-grid">
          {INPUT_CATEGORIES.map(({ category, label }) => {
            const file = importStatus?.[category]
            return (
              <li key={category} className="exam-import-card">
                <h3>{label}</h3>
                <p className="exam-status" data-status={file?.status}>
                  {file ? STATUS_LABELS[file.status] : 'Status unavailable'}
                </p>
                {file?.status === 'accepted' && (
                  <p className="exam-muted">{formatNumber.format(file.recordCount)} records</p>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      <section className="exam-glass exam-panel" aria-labelledby="schedule-summary">
        <div className="exam-panel-heading">
          <h2 id="schedule-summary">Last scheduling result</h2>
        </div>
        {lastResult ? (
          <>
            <p className="exam-status" data-status={lastResult.success ? 'accepted' : 'rejected'}>
              {lastResult.success ? 'Schedule generated' : 'No valid schedule could be generated'}
            </p>
            {lastResult.errorMessage && <p className="exam-muted">{lastResult.errorMessage}</p>}
            {lastResult.relaxationsApplied.length > 0 ? (
              <div className="exam-result-detail">
                <h3>Exam period adjustments</h3>
                <ol>
                  {lastResult.relaxationsApplied.map((step, index) => (
                    <li key={index}>
                      {step.kind === 'addDay' ? 'Added a day' : 'Added a slot per day'}
                      {' · '}
                      {step.daysCount} days, {step.slotsPerDay} slots per day
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <p className="exam-muted">No exam period adjustments applied.</p>
            )}
            {lastResult.stats && (
              <dl className="exam-stat-grid">
                {STATS.map(({ key, label }) => {
                  const value = lastResult.stats?.[key]
                  return (
                    <div key={key}>
                      <dt>{label}</dt>
                      <dd>{value == null ? 'Unavailable' : formatNumber.format(value)}</dd>
                    </div>
                  )
                })}
              </dl>
            )}
          </>
        ) : (
          <p className="exam-muted">No scheduling run yet.</p>
        )}
        {schedule && (
          <p className="exam-muted">
            Current schedule: {formatNumber.format(schedule.assignments.length)} assignments,{' '}
            {schedule.daysCount} days, {schedule.slotsPerDay} slots per day.
          </p>
        )}
      </section>

      <section className="exam-glass exam-panel" aria-labelledby="dashboard-views">
        <div className="exam-panel-heading">
          <h2 id="dashboard-views">Views</h2>
        </div>
        {!schedule && (
          <p className="exam-muted">Result views unlock when a schedule is available.</p>
        )}
        <ul className="exam-views">
          {NAVIGATION_ITEMS.filter((item) => item.href !== '/home').map((item) => (
            <li key={item.href}>
              {isNavigationAvailable(item, schedule) ? (
                <Link href={item.href} className="exam-view-link">
                  {item.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <span className="exam-view-link" role="link" aria-disabled="true">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
