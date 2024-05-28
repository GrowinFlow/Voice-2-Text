import React from 'react'
import Button from 'react-bootstrap/Button';

function Btn(props) {
  return (
    <>
    
    <Button className={`m-2 px-4 focus-ring focus-ring-${props.bg}`} variant={props.bg} onClick={props.function}>{props.text}</Button>
    </>
  )
}

export default Btn