import React, { useState } from 'react'
import Header from '../../components/Header/Header';

function Pay(props) {


  // Criamos um state chamado "contador"
  const [count, setCount] = useState(0);


  return (
    <div>
      <Header />
    </div>
  )
}

export default Pay; 