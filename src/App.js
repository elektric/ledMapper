import React, { useState, useEffect } from 'react'
import './App.css'
import { Stage, Layer } from 'react-konva'
import Led from './Led'
import PixelModel from './PixelModel'
import gifData from './data/gif.json'

function App () {
  const numberOfFrames = gifData.frameModelList.length
  // const [curentPixels, setCurrentPixels] = useState({})
  const [currentFrameNumber, setCurrentFrameNumber] = useState(0)
  setTimeout(() => {
    setCurrentFrameNumber((currentFrameNumber + 1) % numberOfFrames)
  }, gifData.frameModelList[currentFrameNumber].delay * 10)
  return (
    <div className='App'>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <PixelModel
            pixelModelList={gifData.frameModelList[currentFrameNumber]}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default App
