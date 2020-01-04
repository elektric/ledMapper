import React, { useState } from 'react'
import './App.css'
import { Stage, Layer } from 'react-konva'
import GifPlayer from 'react-gif-player'
import PixelModel from './PixelModel'
import gifData from './data/gif.json'
import gifMario from './data/mario.gif'

function App () {
  const numberOfFrames = gifData.frameModelList.length
  const [currentFrameNumber, setCurrentFrameNumber] = useState(0)
  setTimeout(() => {
    setCurrentFrameNumber((currentFrameNumber + 1) % numberOfFrames)
  }, gifData.frameModelList[currentFrameNumber].delay * 10)
  return (
    <div className='App'>
      <GifPlayer gif={gifMario} autoplay />
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
