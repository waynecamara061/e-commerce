import React from 'react';
import './Pay.scss';
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';


const Pay = ({ data }) => {
  const { payId } = useParams();
  const selectedProduct = data.find((product) => product.id == payId);

  return (
    <section>
      <SubHeader />
      <div className='main-pay'>
        <div className='pay-detail'>
          <div className='pay-detail-left'>
            <div className='img-products-left'>
              <img src={selectedProduct.imgPathDetail} />
            </div>
          </div>
          <div className='pay-detail-rigth'>
            <div className='text-container-pay'>
              <h1>Meu carrinho</h1>
              <p>{selectedProduct.title}</p>
              <hr />
            </div>
            <div className='price-area'>
              <h1>{selectedProduct.price}</h1>
              <p>
                Cor:{" "}
                {selectedProduct.colors.length === 1
                  ? selectedProduct.colors.map((color, index) => (
                    <span key={index}>{color}</span>
                  ))
                  : selectedProduct.colors.map((color, index) =>
                    index + 1 === selectedProduct.colors.length ? (
                      <span key={index}>{color} </span>

                    ) : (
                      <span key={index}>{color} </span>
                    )
                  )}
              </p>
              <button className='quadrado-preto'></button>
              <button className='quadrado-branco'></button>
            </div>
            <button className='btn-home'><Link to={"/home"}>Continuar comprando</Link></button>
            <button className='btn-finally'><Link to={'/finally'}>Finalizar compra</Link></button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Pay;