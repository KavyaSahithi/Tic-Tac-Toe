/**
 * Main algorithm for tic-tac-toe app, checks after each move if any
 * player matches any one winning combination.
 * @param {Array} squares Matrix for tic-tac-toe
 * @return {(string|null)} String if a player wins, null if nobody wins.
 */
export function calculateWinner(squares) {
  // Create array with all winning combinations possible.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  // Loop over all elements on the board to check if anyone has won.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    // Check if all 3 positions of any one winning combination is filled by same player.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
