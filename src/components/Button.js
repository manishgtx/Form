import React from 'react'

const Button = (props) => {
  const {children,...all} = props
  return (
    <button {...all}>{children}</button>
  )
}

export default Button