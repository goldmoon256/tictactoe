import React, { Fragment } from 'react';

function Square({ value }) {
  return <button className="square">{value}</button>
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


