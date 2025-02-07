'use client'

import { useState } from 'react'

const List = ({ items }) => {
  const [listItems, setListItems] = useState(items)

  const handleClick = (clickedItem) => {
    const newList = listItems.filter((item) => item !== clickedItem)
    setListItems([clickedItem, ...newList])
  }

  return (
    <ul>
      {listItems.map((item) => (
        <li
          key={item}
          onClick={() => handleClick(item)}
          style={{ cursor: 'pointer' }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Testing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          List Component
        </h1>
        <List items={['A', 'B', 'C']} />
      </div>
    </div>
  )
}
