import React from 'react'

const Squares = ({value, onClick}) => (
    <button onClick= {onClick} className= "Squares">{value}</button>
)

export default Squares