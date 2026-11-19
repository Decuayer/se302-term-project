/**
 * @file next.config.ts
 * @module renderer
 *
 * Responsibility: Next.js configuration for the renderer. Exports static files that
 * Electron serves through the app:// protocol in production.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 */
import type { NextConfig } from 'next'

const config: NextConfig = {
  // Electron serves the renderer as static files, so Next.js must export them.
  output: 'export',
  // In production Nextron packages everything from <root>/app.
  distDir: process.env.NODE_ENV === 'production' ? '../../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Do not generate AGENTS.md in the renderer folder during `next dev`.
  agentRules: false,
}

export default config
