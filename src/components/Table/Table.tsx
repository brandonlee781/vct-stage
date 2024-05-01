import clsx from 'clsx'

import { type TableHeaderProps, TableHeader } from './TableHeader'
import { type TableRowProps, TableRow } from './TableRow'

export type Header = { text: string; link?: string; span?: number }

type TableProps = {
  headerEls?: React.ReactNode[]
  headers?: Header[]
} & React.HTMLAttributes<HTMLTableElement>

interface TableComponent
  extends React.ForwardRefExoticComponent<
    TableProps & React.HTMLAttributes<HTMLTableElement>
  > {
  TableRow: React.ForwardRefExoticComponent<
    TableRowProps & React.HTMLAttributes<HTMLTableRowElement>
  >
  TableHeader: React.ForwardRefExoticComponent<
    TableHeaderProps & React.HTMLAttributes<HTMLTableCellElement>
  >
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ headers, headerEls, children, className }, ref) => {
    return (
      <div className={clsx('flex flex-col h-full', className)}>
        <div className="h-full overflow-x-auto rounded-lg bg-transparent">
          <div className="inline-block min-w-full h-full align-middle">
            <div className="overflow-hidden h-full">
              <table
                ref={ref}
                className={clsx(
                  'min-w-full h-full divide-y-4 divide-x table-fixed divide-vctDark-800'
                )}
              >
                <thead className="bg-vctMid-500">
                  <tr>
                    {headerEls}
                    {!headerEls &&
                      headers?.map((header, index) => (
                        <th
                          scope="col"
                          className={clsx(
                            'p-3 text-left text-xs font-medium uppercase tracking-wider lg:text-center h-8'
                          )}
                          key={index}
                          colSpan={header.span}
                        >
                          {header.text && !header.link && (
                            <span>{header.text}</span>
                          )}
                          {header.text && header.link && (
                            <a
                              href={header.link}
                              className="underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {header.text}
                            </a>
                          )}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="bg-vctMid-500 divide-y-4 divide-x-2 divide-vctDark-800">
                  {children}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
) as TableComponent
Table.displayName = 'Table'

Table.TableRow = TableRow
Table.TableHeader = TableHeader
