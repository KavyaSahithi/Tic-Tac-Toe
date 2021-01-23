import React from 'react'

/**
 * Squares functional component handles click action on induvidual squares
 * and displays value x or o in respective colors.
 */
function Square(props) {
  const { onClick, value } = props

  // Function to decide background color of the square depending on player.
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
    // Display X or O based on player click and set color.
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
