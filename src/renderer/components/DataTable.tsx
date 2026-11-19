/**
 * @file DataTable.tsx
 * @module renderer/components
 *
 * Responsibility: Reusable table with column sorting, instant text search and
 * pagination. Used by the course, classroom and student views.
 *
 * Owner: Utku Durmaz (Frontend - Matrix & Student) - D6-4
 * Consumers: Kutluay Aydın (D5-3, D5-4), Utku Durmaz (D6-1)
 * References: SRS NFR-04
 */
import type { ReactNode } from 'react'

export interface DataTableColumn<Row> {
  key: string
  header: string
  render(row: Row): ReactNode
  /** Value used for sorting and searching; omit to make the column unsortable. */
  sortValue?(row: Row): string | number
}

export interface DataTableProps<Row> {
  columns: DataTableColumn<Row>[]
  rows: Row[]
  getRowKey(row: Row): string
  /** Placeholder for the search box; omit to hide search. */
  searchPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
}

export function DataTable<Row>({ columns, rows, getRowKey, emptyMessage }: DataTableProps<Row>) {
  // TODO [D6-4 | Utku Durmaz]: Add sort state (column + direction) toggled by header clicks, a search
  // box filtering rows by sortValue (e.g. course code), and pagination controls driven by pageSize.
  // Acceptance: sorting and searching are correct, and Course, Classroom and Student views all
  // use this component.
  if (rows.length === 0) {
    return <p className="text-sm text-slate-500">{emptyMessage ?? 'No data.'}</p>
  }

  return (
    <table className="w-full border-collapse bg-white text-sm">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="border-b border-slate-200 px-3 py-2 text-left">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={getRowKey(row)}>
            {columns.map((column) => (
              <td key={column.key} className="border-b border-slate-100 px-3 py-2">
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
