import React from 'react'

export const Footer = () => {
  let footerstyle = {
    width: "100%"
  }
  return (
    <>
      <footer className='text-center bg-light p-4 footer' style={footerstyle}>
        Copytright&copy;TodoList.com
      </footer>
    </>
  )
}
