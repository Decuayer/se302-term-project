# Exam Scheduler

Automated University Examination Scheduling System — **SE302 Software Engineering, Section 1, Team 11 (2026-2027 Fall)**.

A Windows desktop application for Student Affairs. It imports students, courses, classrooms and attendance lists from files, generates an exam timetable that satisfies the mandatory rules, and presents it per student, per course, per classroom and per day/slot.

> **Status:** project skeleton. Every module exists with typed signatures and `TODO [Task-ID | Owner]` comments; business logic is not implemented yet. The app builds, launches and navigates between placeholder screens.

---

## Scheduling rules

| ID    | Rule                                                               | Type                 |
| ----- | ------------------------------------------------------------------ | -------------------- |
| SR-01 | A student has at most **two** exams per day                        | Hard (never relaxed) |
| SR-02 | A student never has exams in **consecutive** slots on the same day | Hard (never relaxed) |
| SR-03 | An exam never exceeds the capacity of its classroom                | Hard                 |
| SR-04 | A student never has two exams in the same slot                     | Hard                 |
| SR-05 | A classroom never hosts two exams in the same slot                 | Hard                 |
| SR-06 | Spread exams evenly across days                                    | Soft (optimization)  |
| SR-07 | Avoid unnecessary classroom usage                                  | Soft (optimization)  |
| SR-08 | If no valid schedule exists, report it — never show an invalid one | Behavior             |

When no solution exists, the engine may only enlarge the exam period (more slots per day, then more days). SR-01 and SR-02 are never relaxed.

---

## Tech stack

| Concern         | Technology                                                    |
| --------------- | ------------------------------------------------------------- |
| Desktop shell   | Electron 45 + TypeScript 6                                    |
| UI              | Next.js 16 (Pages Router, static export) via Nextron 10       |
| Styling / state | Tailwind CSS 4, Zustand 5                                     |
| Background work | Node.js `worker_threads` (keeps the UI responsive, NFR-02)    |
| Export          | exceljs (Excel), Electron `printToPDF` (PDF)                  |
| Tests           | Vitest (unit), Playwright for Electron (E2E)                  |
| Packaging       | electron-builder — NSIS one-click installer + portable `.exe` |
| Quality / CI    | ESLint, Prettier, GitHub Actions                              |

The packaged app needs **no** extra software on the user's machine (no Node.js, no database).

---

## Architecture

```
┌──────────────────────── Renderer (Next.js, src/renderer) ────────────────────────┐
│ Dashboard & Help ─ Import Data ─ Views: Daily Slot │ Classroom │ Course │ Student │
└───────────────────────────────┬──────────────────────────────────────────────────┘
                                │ window.api (typed, src/shared/ipcTypes.ts)
┌───────────────────── Security & IPC (src/main/preload.ts) ───────────────────────┐
│ contextBridge · contextIsolation on · nodeIntegration off                        │
│ invoke('scheduler:run') ↔ send('scheduler:progress') ↔ reply                     │
└───────────────────────────────┬──────────────────────────────────────────────────┘
┌──────────────────── Electron main process (src/main) ────────────────────────────┐
│ IPC handlers → CsvParserService + validation → DataStore (in-memory state)       │
│             → SchedulerWorkerManager ──► Worker thread (schedulerWorker.ts)       │
│                                          └─ ExamSchedulerEngine (src/core)        │
│                                             ├─ ConflictGraph (MRV ordering)       │
│                                             ├─ ScheduleConstraintValidator (hard) │
│                                             ├─ relaxation (period growth)         │
│                                             └─ scoring (soft goals)               │
│             ◄── validated Schedule DTO ── ExportService (CSV / Excel / PDF)       │
└──────────────────────────────────────────────────────────────────────────────────┘
```

- **`src/core`** is pure TypeScript with no Electron imports, so it is unit-testable and runs inside the worker thread.
- **`src/shared`** holds types only (plus `NotImplementedError`). Domain classes never cross IPC; plain DTOs do.
- IPC channel names live in `src/main/ipc/channels.ts` because the preload bundle can only include code from `src/main`.

---

## Folder structure

```
.
├── .github/workflows/        ci.yml (lint, typecheck, test, build) · release.yml (Windows installer on v* tags)
├── data/                     Instructor sample input files (also used as test fixtures)
├── resources/                App icons for electron-builder (placeholders, replace in D1-5)
├── wiki/                     Source of the GitHub Wiki / Pages content (D6-5)
├── scripts/                  generateDataset.ts, benchmark.ts (D4-6)
├── src/
│   ├── shared/               ipcTypes.ts (IPC contract), errors.ts
│   ├── main/                 Electron main process
│   │   ├── main.ts           Entry point
│   │   ├── preload.ts        contextBridge → window.api
│   │   ├── menu.ts           Native menu, Help, About
│   │   ├── helpers/          createWindow.ts
│   │   ├── ipc/              channels, import / scheduler / export handlers
│   │   └── workers/          workerManager.ts, schedulerWorker.ts
│   ├── core/                 Domain layer (pure TypeScript)
│   │   ├── models/           Student, Course, Classroom, TimeSlot, ExamAssignment, Schedule, ScheduleResult
│   │   ├── parser/           CsvParserService, ParseError, validation
│   │   ├── store/            DataStore
│   │   ├── constraints/      ScheduleConstraintValidator, candidateSlots, ConflictReport
│   │   ├── engine/           ExamSchedulerEngine, ConflictGraph, relaxation, scoring
│   │   ├── export/           ExportService
│   │   └── config/           defaults.ts (days, slots, limits)
│   └── renderer/             Next.js UI
│       ├── pages/            home (dashboard), import, students, courses, classrooms, daily, help
│       ├── components/       Layout, FileStatusCard, DataTable, SlotCard, StudentCalendarCard, …
│       ├── store/            useAppStore.ts (Zustand)
│       └── content/          userGuide.ts (offline help)
├── tests/
│   ├── unit/                 Vitest suites per module (it.todo placeholders)
│   └── e2e/                  Playwright Electron tests (skipped until features land)
├── electron-builder.yml  nextron.config.ts  vitest.config.ts  playwright.config.ts
└── package.json  tsconfig.json  eslint.config.mjs
```

---

## Getting started

**Prerequisites:** Node.js 26 (see `.nvmrc`) and Git.

```bash
git clone https://github.com/Decuayer/se302-term-project.git
cd se302-term-project
npm install
npm run dev          # Next.js dev server + Electron with hot reload
```

| Script                                           | What it does                                                 |
| ------------------------------------------------ | ------------------------------------------------------------ |
| `npm run dev`                                    | Start the app in development mode                            |
| `npm run build:nopack`                           | Production build into `app/` without creating an installer   |
| `npm run build:win64`                            | Build the Windows installer and portable `.exe` into `dist/` |
| `npm run typecheck`                              | Type-check main/core/shared and the renderer                 |
| `npm run lint`                                   | ESLint                                                       |
| `npm run format`                                 | Prettier (write)                                             |
| `npm test`                                       | Vitest unit tests                                            |
| `npm run test:e2e`                               | Playwright E2E tests (run `npm run build:nopack` first)      |
| `npm run dataset:generate` / `npm run benchmark` | Stress-test tooling (D4-6)                                   |

Before opening a pull request, run: `npm run lint && npm run typecheck && npm test`.

---

## Input files

| File                              | Format                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| `AllStudents`                     | Heading line, then one student ID per line (`Std_ID_001`)                                   |
| `AllCourses`                      | Heading line, then one course code per line (`CourseCode_01`)                               |
| `AllClassroomsAndTheirCapacities` | Heading line, then `Classroom_01;40` (semicolon separated)                                  |
| `AllAttendanceLists`              | Blocks of a course code line followed by `['Std_ID_001', 'Std_ID_002', …]` and a blank line |

Samples are in `data/` (250 students, 20 courses, 10 classrooms of 40 seats).

---

## Branching workflow

| Branch                                          | Purpose                                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| `main`                                          | Reviewed and approved code. Only the project manager merges into it; no direct pushes. |
| `feat/<task-id>-<slug>`                         | One branch per task, e.g. `feat/D2-3-attendance-parser`                                |
| `fix/<task-id>-<slug>`                          | Bug fixes linked to a GitHub issue                                                     |
| `test/…`, `docs/…`, `chore/…`, `ci/…`, `perf/…` | Non-feature work                                                                       |

1. Update `main` and create your task branch from it:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/D2-1-students-courses-parser
   ```
2. Implement the task, then run `npm run lint && npm run typecheck && npm test` and check the app with `npm run dev`.
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/) and include the task ID:
   `feat(parser): parse attendance blocks [D2-3]`
4. Push **only your task branch**: `git push -u origin feat/D2-1-students-courses-parser`.
   Never push to `main`, and never use `--force`, `git reset --hard` or `git rebase`.
5. Open a pull request from your branch into `main` with the task ID in the title, e.g. `[D2-1] Students and courses parser`. CI must pass.
6. The project manager (Demir Cücü) reviews and merges the pull request. Move the Trello card to **Done** and copy the commit URL into the TPS spreadsheet.
7. For a release, the project manager tags `vX.Y.Z` on `main` to trigger the Windows release build.

To bring the latest `main` into your branch while working, run `git pull origin main` on your branch. If a merge conflict appears, ask the project manager before resolving it.

Report every bug as a GitHub Issue (steps to reproduce, expected, actual, output, severity), as required by the course.

---

## Task traceability

Every stub carries a comment in this format, so you can find your work with a search:

```ts
// TODO [D2-3 | Mehmet Çağan Karataş]: <what to implement, inputs/outputs, acceptance criteria, SRS/UML reference>
```

```bash
grep -rn "TODO \[D2-" src tests      # all of one developer's tasks
grep -rn "TODO \[D4-2" src tests     # one task
```

Unimplemented functions throw `NotImplementedError('<task-id>')`. Unit tests are `it.todo(...)` entries named after each acceptance criterion; replace them with real tests as you implement.

---

## Team and module ownership

| Member               | Role                            | Tasks       | Main modules                                                                                                                              |
| -------------------- | ------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Demir Cücü           | Electron Platform & IPC         | D1-1 – D1-6 | `src/main/*`, `src/shared/ipcTypes.ts`, `electron-builder.yml`, `release.yml`                                                             |
| Mehmet Çağan Karataş | Data Parsing & I/O              | D2-1 – D2-6 | `src/core/parser`, `src/core/store`, `src/core/export`, models `Student` `Course` `Classroom`, `ipc/exportHandlers.ts`                    |
| Çağrı Taşöz          | Constraint Validation           | D3-1 – D3-6 | `src/core/constraints`                                                                                                                    |
| Alp Salın            | CSP Engine                      | D4-1 – D4-6 | `src/core/engine`, models `TimeSlot` `ExamAssignment` `Schedule` `ScheduleResult`, `src/core/config`, `scripts/`                          |
| Kutluay Aydın        | Frontend — Import & Dashboard   | D5-1 – D5-6 | `pages/home` `import` `courses` `classrooms` `help`, `Layout`, `FileStatusCard`, `SchedulerProgress`, `Toast`, `useAppStore`, `userGuide` |
| Utku Durmaz          | Frontend — Matrix & Student, QA | D6-1 – D6-6 | `pages/students` `daily`, `DataTable`, `SlotCard`, `StudentCalendarCard`, `tests/e2e`, `ci.yml`                                           |
| Whole team           | Open decisions (SRS Sec. 8)     | T-0         | `src/core/config/defaults.ts`                                                                                                             |

**Open decisions (T-0):** default exam days, slots per day and slot times; whether one course may be split across several classrooms. Update `defaults.ts`, `ExamAssignment` and the UML when decided.

---

## Milestones

| Milestone | Deliverable                                              | Due        |
| --------- | -------------------------------------------------------- | ---------- |
| M1        | Requirements document                                    | 15.11.2026 |
| M2        | Design document                                          | 06.12.2026 |
| M3        | Setup file, source ZIP, GitHub Wiki/Release, in-app help | 20.12.2026 |
