import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom'
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';
import ProductsCard from '../../components/ProductsCard/ProductsCard';


const Home = ({ data }) => {
    return (
        <div className='home-container'>
            <SubHeader />
            <img src="backgroundImage-game.png" alt="" className='game-bg' />
            <div className='section-card'>
                {data.map((product) => (
                    <ProductsCard key={product.id} data={product} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Home;