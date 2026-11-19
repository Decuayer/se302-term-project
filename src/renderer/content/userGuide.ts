/**
 * @file userGuide.ts
 * @module renderer/content
 *
 * Responsibility: Content of the built-in user guide. Bundled with the renderer so it
 * is available without internet access (NFR-05).
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-6
 * References: SRS FR-14, NFR-05, Sec. 5 (input formats), Sec. 6 (user flow)
 */

export interface UserGuideSection {
  id: string
  title: string
  /** Paragraphs of plain text. */
  body: string[]
}

// TODO [D5-6 | Kutluay Aydın]: Write the full guide: input file formats with examples from data/,
// importing and replacing files, choosing days/slots, the hard rules (no consecutive slots, at most
// two exams per day), reading each result view, exporting, and an FAQ for "no valid schedule".
export const USER_GUIDE_SECTIONS: UserGuideSection[] = [
  { id: 'getting-started', title: 'Getting Started', body: [] },
  { id: 'input-files', title: 'Preparing Input Files', body: [] },
  { id: 'importing', title: 'Importing and Replacing Files', body: [] },
  { id: 'scheduling', title: 'Generating a Schedule', body: [] },
  { id: 'rules', title: 'Scheduling Rules', body: [] },
  { id: 'views', title: 'Reading the Results', body: [] },
  { id: 'exporting', title: 'Exporting the Schedule', body: [] },
  { id: 'faq', title: 'Frequently Asked Questions', body: [] },
]
