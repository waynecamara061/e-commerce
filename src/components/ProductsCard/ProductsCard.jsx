import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsCard.scss';

const ProductsCard = ({data}) => {
  return (
    <div className='home-card'>
      <img src={data.imgPath} alt="Model" />
      <div className='home-card-description'>
        <p>
          {data.title}
        </p>
      </div>
      <div className='btn-container'>
        <button className='btn-view'>
          <Link to={`/products/${data.id}`}> Ver mais</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;