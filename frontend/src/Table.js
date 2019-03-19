import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import './Table.css'

const ColumnHeader = ({ label, active, sortDir, ...props }) => (
  <th className='cursor-pointer' {...props}>
    <span className={cn(active && 'uk-text-emphasis')}>{label}</span>
    <span className={cn('sort-icons', !active && 'invisible')}>
      <span data-uk-icon='triangle-up' hidden={sortDir !== 'asc'} />
      <span data-uk-icon='triangle-down' hidden={sortDir !== 'desc'} />
    </span>
  </th>
)

const Table = ({ list }) => {
  const [sortCol, setSortCol] = useState(0)
  const [sortDir, setSortDir] = useState('asc')

  const headers = list && list.length && Object.keys(list[0])
  
  const getColName = i => Object.keys(list[0] || {})[i]

  const handleChangeSort = col => () => {
    setSortCol(col)
    if (col === sortCol) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortDir('asc')
    }
  }

  const colName = getColName(sortCol)
  list.sort((a, b) => {
    const _a = sortDir === 'asc' ? a : b
    const _b = sortDir === 'asc' ? b : a
    return String(_a[colName]).localeCompare(_b[colName])
  })

  return (
    <div className='uk-overflow-auto'>
      <table className='uk-table uk-table-divider uk-table-hover'>
        <thead>
          <tr>
            {(headers || []).map((label, i) => (
              <ColumnHeader key={label} label={label} active={i === sortCol} sortDir={sortDir} onClick={handleChangeSort(i)}>
                {label}
              </ColumnHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {(list || []).map((row, r) => (
            <tr key={r}>
              {Object.values(row).map((col, i) => (
                <td key={i}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table