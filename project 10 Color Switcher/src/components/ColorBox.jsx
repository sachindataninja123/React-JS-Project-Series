import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div>
      <div style={{
        backgroundColor : `${color}`
      }} className='h-100 w-100 rounded-xl border flex items-center justify-center font-bold text-3xl '>
        {color.toUpperCase()}
      </div>
    </div>
  )
}

export default ColorBox
