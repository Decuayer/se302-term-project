/**
 * Application navigation for the dashboard, import, results and help (D5-1).
 */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppStore } from '../../store/useAppStore'
import { isNavigationAvailable, NAVIGATION_ITEMS } from './navigation'

export function Sidebar() {
  const { pathname } = useRouter()
  const schedule = useAppStore((state) => state.schedule)

  return (
    <aside className="exam-sidebar">
      <Link href="/home" className="exam-brand" aria-label="Exam Scheduler home">
        <Image src="/brand/ieu-logo-tr-2.png" alt="" width={68} height={48} />
        <span>
          Exam <strong>Scheduler</strong>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <ul>
          {NAVIGATION_ITEMS.map((item) => {
            const current = item.href === pathname ? 'page' : undefined
            return (
              <li key={item.href}>
                {isNavigationAvailable(item, schedule) ? (
                  <Link href={item.href} className="exam-nav-item" aria-current={current}>
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="exam-nav-item"
                    role="link"
                    aria-disabled="true"
                    aria-current={current}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
