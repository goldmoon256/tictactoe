import React, { Fragment } from 'react';
import { useState } from 'react';
function Square() {
  const [value,setValue] = useState(null)
  function handleClick() {
    if (value == null) {
      setValue("X")
      console.log("set")
    }
      
  }
  return <button className="square" onClick = {handleClick}>{value}</button>
}

export default function Board() {
  return (
    <Fragment>
      <div className="board-row">
        <Square value="0"/>
        <Square value="1"/>
        
      </div>

      <div className="board-row">
      </div>

      <div className="board-row">
      </div>
    </Fragment>
  )
}


