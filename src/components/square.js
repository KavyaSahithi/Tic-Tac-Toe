import React from 'react'

function Square(props) {
  const { onClick, value } = props

  const giveMeColor = () => {
    switch (value) {
      case 'X':
        return '#D6E075'
      case 'O':
        return 'pink'
      default:
        return 'lightblue'
    }
  }

  return (
    <button
      onClick={onClick}
      style={{ background: giveMeColor() }}
      className='square'
    >
      {value}
    </button>
  )
}

export default Square
