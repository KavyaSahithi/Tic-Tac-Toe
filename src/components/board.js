import React from 'react'
import Square from './square'

function Board({ squares, onClick }) {
  return (
    <div className='board'>
      {squares.map((square, i) => {
        return (
          <Square key={i} value={square} onClick={() => onClick(i)}></Square>
        )
      })}
    </div>
  )
}

export default Board
