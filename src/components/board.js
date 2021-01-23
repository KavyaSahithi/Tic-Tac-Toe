import React from 'react'
import Square from './square'

/**
 * Board functional takes the squares and onClick function as props, it loops over all the
 * squares and calls Squares component for each key-value of square along with the onClick
 * function as props.
 */
function Board({ squares, onClick }) {
  return (
    <div className='board'>
      {/* Loops over all squares */}
      {squares.map((square, i) => {
        return (
          /* Passes props down to Square component */
          <Square key={i} value={square} onClick={() => onClick(i)}></Square>
        )
      })}
    </div>
  )
}

export default Board
