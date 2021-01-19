import React, { useState } from 'react'
import { calculateWinner } from '../code'
import Board from './board'

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
        className='btn'
      >
        <strong> START GAME </strong>
      </button>
    )
  }

  return (
    <>
      <div className='game'>
        <div>
          <h1>
            <span className='display'>
              {winner
                ? 'Winner ' + winner
                : sum === 9
                ? 'It is a draw!'
                : 'Next Player  ' + (xIsNext ? 'X' : 'O')}
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
