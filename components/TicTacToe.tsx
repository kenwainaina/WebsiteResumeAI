"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

type SquareValue = "x" | "o" | null

export function calculateWinner(squares: (string | null)[]): { winner: string; line: number[] } | null {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] }
    }
  }
  return null
}

export function getAIMove(squares: (string | null)[]): number {
  // Check for winning move
  for (let i = 0; i < 9; i++) {
    if (!squares[i]) {
      const testSquares = squares.slice()
      testSquares[i] = "o"
      if (calculateWinner(testSquares)) {
        return i
      }
    }
  }

  // Check for blocking player's winning move
  for (let i = 0; i < 9; i++) {
    if (!squares[i]) {
      const testSquares = squares.slice()
      testSquares[i] = "x"
      if (calculateWinner(testSquares)) {
        return i
      }
    }
  }

  // Take center if available
  if (!squares[4]) return 4

  // Take a corner
  const corners = [0, 2, 6, 8]
  const availableCorners = corners.filter((i) => !squares[i])
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)]
  }

  // Take any available side
  const sides = [1, 3, 5, 7]
  const availableSides = sides.filter((i) => !squares[i])
  if (availableSides.length > 0) {
    return availableSides[Math.floor(Math.random() * availableSides.length)]
  }

  // This should never happen if the board is not full
  return -1
}

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState<{ winner: string; line: number[] } | null>(null)

  const handleClick = useCallback(
    (i: number) => {
      if (winner || board[i]) return

      const newBoard = board.slice() as SquareValue[]
      newBoard[i] = "x"
      setBoard(newBoard)
      setIsXNext(false)
    },
    [board, winner],
  )

  const aiMove = useCallback(() => {
    const move = getAIMove(board)
    if (move !== -1) {
      const newBoard = board.slice() as SquareValue[]
      newBoard[move] = "o"
      setBoard(newBoard)
      setIsXNext(true)
    }
  }, [board])

  useEffect(() => {
    const newWinner = calculateWinner(board)
    if (newWinner) {
      setWinner(newWinner)
    } else if (!isXNext) {
      // AI's turn
      setTimeout(aiMove, 500)
    }
  }, [board, isXNext, aiMove])

  const renderSquare = (i: number) => (
    <Button
      className={`w-20 h-20 text-4xl font-bold ${
        winner && winner.line.includes(i) ? "bg-green-500/50 hover:bg-green-500/70" : "bg-white/10 hover:bg-white/20"
      }`}
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </Button>
  )

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  const isBoardFull = board.every((square) => square !== null)

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">
        {winner
          ? `Winner: ${winner.winner.toUpperCase()}`
          : isBoardFull
            ? "It's a tie!"
            : `Next player: ${isXNext ? "X" : "O"}`}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((_, i) => (
          <React.Fragment key={i}>{renderSquare(i)}</React.Fragment>
        ))}
      </div>
      <Button onClick={resetGame} className="bg-purple-500 hover:bg-purple-600">
        Reset Game
      </Button>
    </div>
  )
}

export default TicTacToe
