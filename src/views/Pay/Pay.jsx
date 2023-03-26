import React from 'react';
import './Pay.scss';
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';


const Pay = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section>
      <SubHeader />
      <div className='main-pay'>
        <div className='pay-detail'>
          <div className='pay-detail-left'>
            <div className='img-products-left'>
              <img src="xbox.png" />
            </div>
          </div>
          <div className='pay-detail-rigth'>
            <div className='text-container-pay'>
              <h1>Meu carrinho</h1>
              {/* <p>{data.title}</p> */}
              <hr />
            </div>
            <div className='price-area'>
              {/* <h1>{data.price}</h1> */}
              {/* <p>
              Cor:{" "}
              {data.colors.length === 1
                ? data.colors.map((color, index) => (
                  <span key={index}>{color}</span>
                ))
                : data.colors.map((color, index) =>
                  index + 1 === data.colors.length ? (
                    <span key={index}>{color} </span>

                  ) : (
                    <span key={index}>{color} </span>
                  )
                )}
            </p> */}
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