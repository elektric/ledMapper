import React, { useState } from 'react'
import { Stage, Layer, Rect, Image, Text } from 'react-konva'

const Led = ({ color, click, number }) => {
  return (
    <Rect
      draggable
      x={20 * number}
      y={10}
      width={50}
      height={50}
      fill={color}
      onClick={e => click(e, number)}
      stroke='black'
    />
  )
}

export default Led
