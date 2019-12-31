import React, { useState } from 'react'
import './App.css'
import { Stage, Layer } from 'react-konva'
import Led from './Led'

function App () {
  const [nextElem, setNextElem] = useState(5)
  const [ledAry, setLedAry] = useState(['1', '2', '3', '4'])
  const ledItems = ledAry.map(number => (
    <Led
      color='green'
      click={(e, num) => {
        setLedAry([...ledAry, nextElem])
        setNextElem(nextElem + 1)
      }}
      number={number}
      key={number}
    />
  ))
  return (
    <div className='App'>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>{ledItems}</Layer>
      </Stage>
    </div>
  )
}

export default App
