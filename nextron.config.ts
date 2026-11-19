/**
 * Nextron build configuration.
 *
 * Responsibility: tells Nextron where the main-process and renderer sources live
 * and extends the main-process webpack build so it can compile the shared domain
 * code (src/core, src/shared) and emit the scheduler worker as a separate bundle.
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-1, D1-4
 */
import path from 'node:path'
import type { NextronConfig } from 'nextron'

const rootDir = import.meta.dirname

const config: NextronConfig = {
  mainSrcDir: 'src/main',
  rendererSrcDir: 'src/renderer',

  webpack: (webpackConfig) => {
    // Nextron only transpiles files inside mainSrcDir by default. The main process
    // also imports the pure TypeScript domain layer, so widen the loader scope.
    const tsRule = webpackConfig.module?.rules?.[0]
    if (tsRule && typeof tsRule === 'object') {
      tsRule.include = [
        path.join(rootDir, 'src/main'),
        path.join(rootDir, 'src/core'),
        path.join(rootDir, 'src/shared'),
      ]
    }

    // The CSP solver runs in a worker thread (NFR-02), so it needs its own entry.
    webpackConfig.entry = {
      ...(webpackConfig.entry as Record<string, string>),
      schedulerWorker: path.join(rootDir, 'src/main/workers/schedulerWorker.ts'),
    }

    return webpackConfig
  },
}

export default config
