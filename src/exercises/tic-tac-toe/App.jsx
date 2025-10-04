import { useState } from "react"

function Square({value}) {
  // const [value, setValue] = useState(null)

  function handleClick(){
    // console.log("clicked")
    setValue("X")
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // console.log(squares)

  return(
  <>
    <div className="board-row">
      <Square value={[0]} />
      <Square value={[1]} />
      <Square value={[2]} />
    </div>
    <div className="board-row">
      <Square value={[3]}/>
      <Square value={[4]}/>
      <Square value={[5]}/>
    </div>
    <div className="board-row">
      <Square value={[6]}/>
      <Square value={[7]}/>
      <Square value={[8]}/>
    </div>
  </>
  )
}