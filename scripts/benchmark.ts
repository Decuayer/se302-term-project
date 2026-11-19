/**
 * @file benchmark.ts
 * @module scripts
 *
 * Responsibility: Runs the engine on datasets of increasing size and prints runtime,
 * backtrack count and relaxation steps, for docs/benchmark.md.
 * Usage: npm run benchmark
 *
 * Owner: Alp Salın (CSP Engine) - D4-6
 */

export interface BenchmarkRow {
  label: string
  students: number
  courses: number
  classrooms: number
  elapsedMs: number
  backtrackCount: number
  relaxationSteps: number
  success: boolean
}

export function runBenchmarks(): BenchmarkRow[] {
  // TODO [D4-6 | Alp Salın]: For small / medium / large datasets (generateDataset), parse the files,
  // run ExamSchedulerEngine and collect a BenchmarkRow per run. Acceptance: a table for at least
  // three sizes is documented.
  throw new Error('Not implemented yet (task D4-6).')
}

// TODO [D4-6 | Alp Salın]: Call runBenchmarks() and print the rows with console.table.
console.log('Benchmark is not implemented yet (task D4-6).')
