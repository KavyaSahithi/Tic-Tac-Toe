import React from 'react'

const style = {
  background: 'lightblue',
  border: '1px solid white',
  fontSize: '10vh',
  fontWeight: '800',
  color: 'white',
  cursor: 'pointer',
  outline: 'none',
}
function Square(props) {
  const { onClick, value } = props
  return (
    <button onClick={onClick} style={style}>
      {value}
    </button>
  )
}

export default Square
