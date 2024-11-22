import React from 'react'

const Button = ({className,btext}) => {
  return (
   <button className={`${className}`}>{btext}</button>
  )
}

export default Button
