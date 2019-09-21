import React from 'react'

export const Hello = ({ nested }) => {
  return (
    <p>
      {nested.first?.second ?? 'nop'}
    </p>
  )
}
