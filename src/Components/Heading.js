import React from 'react'

function Heading(props) {
  return (
    <>
    <h1 className='text-primary fw-bold py-4'> {props.text}</h1>
    </>
  )
}

export default Heading