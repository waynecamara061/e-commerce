import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>
                Home
            </h1>
            <button>
                <Link to={`/Products/1`}>Produto</Link>
            </button>
        </div>
    )
}

export default Home;