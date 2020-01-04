import React, { useState } from 'react'
import { Stage, Layer, Rect, Image, Text, Circle } from 'react-konva'
const size = 25
const spacing = 7
const Led = ({ red, green, blue, alpha, row, col }) => {
  // console.log(red, green, blue, alpha, row, col)
  return (
    <Circle
      y={size * col + size / 2 + col * spacing}
      x={size * row + size / 2 + row * spacing}
      width={size}
      height={size}
      fill={'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')'}
      stroke='black'
    />
  )
}

export default Led
