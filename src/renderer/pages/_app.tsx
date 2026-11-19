/**
 * @file _app.tsx
 * @module renderer/pages
 *
 * Responsibility: Next.js application root; applies global styles and the shared
 * application layout to every page.
 *
 * Owner: Kutluay Aydın (Frontend - Import & Dashboard) - D5-1
 */
import type { AppProps } from 'next/app'
import { AppLayout } from '../components/Layout/AppLayout'

import '../styles/globals.css'

export default function ExamSchedulerApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
