import React from 'react'
import { Circle } from 'react-konva'
const size = 10
const spacing = 2
const Led = ({ red, green, blue, alpha, row, col }) => {
  return (
    <Circle
      y={size * col + size / 2 + col * spacing + spacing}
      x={size * row + size / 2 + row * spacing + spacing}
      width={size}
      height={size}
      fill={'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')'}
      stroke='darkgrey'
      strokeWidth='1'
    />
  )
}

export default Led
