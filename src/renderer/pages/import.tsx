/**
 * @file import.tsx
 * @module renderer/pages
 *
 * Responsibility: Import Data screen. Shows the four input categories with their
 * status, lets the user select, replace or remove files, set the exam period and
 * start scheduling once every file is accepted.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-2
 * References: architecture.png (File Import / Parser View), SRS FR-05..FR-08, Sec. 5, Sec. 6 steps 2-4
 */
import Head from 'next/head'
import type { InputCategory } from '../../shared/ipcTypes'
import { FileStatusCard } from '../components/FileStatusCard'
import { PageHeader } from '../components/PageHeader'
import { TaskPlaceholder } from '../components/TaskPlaceholder'

const INPUT_CARDS: { category: InputCategory; title: string; formatHint: string }[] = [
  {
    category: 'students',
    title: 'Students',
    formatHint: 'A heading line followed by one student ID per line (e.g. Std_ID_001).',
  },
  {
    category: 'courses',
    title: 'Courses',
    formatHint: 'A heading line followed by one course code per line (e.g. CourseCode_01).',
  },
  {
    category: 'classrooms',
    title: 'Classrooms',
    formatHint: 'A heading line followed by "Classroom;Capacity" lines (e.g. Classroom_01;40).',
  },
  {
    category: 'attendance',
    title: 'Attendance Lists',
    formatHint: "Course code lines, each followed by a bracketed list: ['Std_ID_001', ...].",
  },
]

export default function ImportPage() {
  // TODO [D5-2 | Kutluay Aydın]: Load the status with useAppStore.refreshImportStatus on mount, pass
  // each category's state and the importFile/removeFile actions to the cards, add day and slot
  // inputs, and enable "Generate Schedule" only when all four files are accepted (FR-08).
  return (
    <>
      <Head>
        <title>Import Data - Exam Scheduler</title>
      </Head>
      <PageHeader
        title="Import Data"
        subtitle="Select or drop the four input files. Replace a file at any time before generating."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {INPUT_CARDS.map((card) => (
          <FileStatusCard
            key={card.category}
            category={card.category}
            title={card.title}
            formatHint={card.formatHint}
            state={null}
            onFileSelected={() => undefined}
            onRemove={() => undefined}
          />
        ))}
      </div>
      <div className="mt-6">
        <TaskPlaceholder
          taskId="D5-2"
          owner="Kutluay Aydın"
          description="Exam period inputs (days, slots per day) and the Generate Schedule button."
        />
      </div>
    </>
  )
}
