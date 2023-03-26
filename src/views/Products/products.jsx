import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import SubHeader from '../../components/SubHeader/SubHeader';

const products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find(product => product.id == productId);

  return (
    <div className='products-container'>
      <SubHeader />
      <ProductDetail data={selectedProduct} />
      <Footer />
    </div>
  );
}

export default products;