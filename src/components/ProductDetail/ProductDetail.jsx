import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = ({ data }) => {
    return (
        <section className='ProductsDetail-container'>
            <div className='main'>
                <div className='flex-left'>
                    <div>
                        <div className='img-products'>
                            <img src={data.imgPathDetail} alt={data.title} />
                            <p>{data.title}</p>
                        </div>
                        <div className='text-container'>
                            <h2>descrição do produto</h2>
                            <p>{data.title}</p>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='flex-rigth'>
                    <div className='text-container-rigth'>
                        <h1> titulo do produto </h1>
                        <hr />
                        <h2> {data.price}</h2>
                        <div className='quadrado-preto'>
                            <button></button>
                        </div>
                    </div>
                    <button className='btn-carrinho'> <Link to={`/pay/${data.id}`}></Link>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;