import { useState } from "react"

function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null)
  return <button className="square" onClick={onSquareClick}>{value}</button>
  
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // console.log(squares)
  function handleClick(){
    // console.log("clicked")
    // setValue("X")
    const nextSquares = squares.slice()
    nextSquares[0] = "X"
    setNextSquares(nextSquares)
  }
  

  return(
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={handleClick} />
      <Square value={squares[1]} onSquareClick={handleClick} />
      <Square value={squares[2]} onSquareClick={handleClick} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={handleClick} />
      <Square value={squares[4]} onSquareClick={handleClick} />
      <Square value={squares[5]} onSquareClick={handleClick} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={handleClick} />
      <Square value={squares[7]} onSquareClick={handleClick} />
      <Square value={squares[8]} onSquareClick={handleClick} />
    </div>
  </>
  )
}