import React, { useState } from 'react'
import { calculateWinner } from '../code'
import Board from './board'

const styles = {
  width: '200px',
  margin: '28px auto',
  marginTop: '10vh',
  backgroundColor: 'blue',
}

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [sum, setSum] = useState(0)
  const winner = calculateWinner(board)

  const handleClick = (i) => {
    const boardCopy = [...board]
    //If user clicks on occupied square or someone wins- return back
    if (winner || boardCopy[i]) return
    //Put X or O in clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
    setSum(sum + 1)
  }

  const renderMoves = () => {
    return (
      <button
        onClick={() => {
          setBoard(Array(9).fill(null))
          setSum(0)
          setXIsNext(true)
        }}
        style={{
          padding: '1vh 2vh',
          marginTop: '3vh',
          border: 'red',
          borderRadius: '1vh',
          backgroundColor: 'red',
          cursor: 'pointer',
          color: 'white',
          fontSize: '3vh',
          '&:hover': {
            background: '#efefef',
          },
        }}
      >
        <strong> START GAME </strong>
      </button>
    )
  }

  return (
    <>
      <div styles={styles}>
        <div>
          <h1 style={{ marginTop: '10vh' }}>
            <span
              style={{
                padding: '2vh 4vh',
                border: 'solid 3px',
                marginTop: '10vh',
              }}
            >
              {winner
                ? 'Winner ' + winner
                : sum === 9
                ? 'It is a draw!'
                : 'Next Player ' + (xIsNext ? 'X' : 'O')}
            </span>
          </h1>
          <h3>{renderMoves()}</h3>
        </div>
        <Board squares={board} onClick={handleClick} />
      </div>
    </>
  )
}

export default Game
