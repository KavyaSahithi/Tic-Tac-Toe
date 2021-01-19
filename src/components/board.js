import React from 'react'
import Square from './square'

const style = {
  border: '4px solid lightblue',
  borderRadius: '10px',
  height: '60vh',
  width: '60vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr)/ repeat(3,1fr)',
}
function Board({ squares, onClick }) {
  return (
    <div style={style}>
      {squares.map((square, i) => {
        return (
          <Square key={i} value={square} onClick={() => onClick(i)}></Square>
        )
      })}
    </div>
  )
}

export default Board
