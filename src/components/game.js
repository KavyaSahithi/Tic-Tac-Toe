import React, { useState } from 'react'
import { calculateWinner } from '../algo'
import Board from './board'

/**
 * Game functional component handles state and renders the board after each
 * move or upon clicking new game. It also calls function to check if any
 * player has won.
 */
function Game() {
  // Set intial state for board, sum and first player as x.
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [sum, setSum] = useState(0)
  // Winner is decided upon calling calculate winner function on
  // the current state of board.
  const winner = calculateWinner(board)

  const handleClick = (i) => {
    const boardCopy = [...board]
    //If user clicks on occupied square or someone wins- return back
    if (winner || boardCopy[i]) return
    //Put X or O in clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O'
    // Sets new state of board
    setBoard(boardCopy)
    // Sets next player
    setXIsNext(!xIsNext)
    // Keeps track of number of moves in the game
    setSum(sum + 1)
  }
  // Function displays button that resets state for starting new game
  const renderMoves = () => {
    return (
      <button
        onClick={() => {
          // Sets the board to empty/ null, number of moves to 0
          // and x to first player.2.99
          setBoard(Array(9).fill(null))
          setSum(0)
          setXIsNext(true)
        }}
        className='btn'
      >
        <strong> NEW GAME </strong>
      </button>
    )
  }

  return (
    <>
      <div className='game'>
        <div>
          <h1>
            {/* Display area - checks if any player won and displays winner, else displays 
              next player, if number of moves is 9, displays that game is a draw.*/}
            <span className='display'>
              {winner
                ? 'Player ' + winner + ' is the WINNER!'
                : sum === 9
                ? 'It is a draw!'
                : 'Next Player  ' + (xIsNext ? 'X' : 'O')}
            </span>
          </h1>
          {/* Calls render moves function*/}
          <h3>{renderMoves()}</h3>
        </div>
        {/*Renders the Board component and passes handleClick function as props*/}
        <Board squares={board} onClick={handleClick} />
      </div>
    </>
  )
}

export default Game
