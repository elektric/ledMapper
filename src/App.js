import React, { Component } from 'react'
import './App.css'
import konva from 'konva'
import { Stage, Layer, Rect, Image } from 'react-konva'
import Led from './Led'

function App () {
  return (
    <div className='App'>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Led />
        </Layer>
      </Stage>
    </div>
  )
}

export default App
