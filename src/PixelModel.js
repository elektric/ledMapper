import React from 'react'
import Led from './Led'
const PixelModel = ({ pixelModelList }) => {
  return pixelModelList.pixelModelList.map((pixel, index) => (
    <Led
      red={pixel.r}
      green={pixel.g}
      blue={pixel.b}
      alpha={pixel.a}
      row={pixel.rowLoc}
      col={pixel.colLoc}
      key={index}
    />
  ))
}

export default PixelModel
