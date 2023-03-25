import React, { useState } from 'react'

function Pay(props) {


  // Criamos um state chamado "contador"
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{count}</h2>
      <ul>
        {props.list.map(cardapio => <li>{cardapio}</li>)}
      </ul>
      <button onClick={() => setCount(count + 1)}>
        Aumenta</button>
    </div>
  )
}

export default Pay; 