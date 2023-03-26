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
                            <h2>Descrição</h2>
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
                        <p>
                            Cor:{" "}
                            {data.colors.lenth === 1
                                ? data.colors.map((color, index) => (
                                    <span key={index}>{color}</span>
                                ))
                                : data.colors.map((color, index) =>
                                    index + 1 === data.colors.lenth ? (
                                        <span key={index}>{color} </span>

                                    ) : (
                                        <span key={index}>{color} </span>
                                    )
                                )}
                        </p>
                        <button className='quadrado-preto'></button>
                        <button className='quadrado-branco'></button>
                    </div>
                    <button className='btn-carrinho'> <Link to={`/pay/${data.id}`}> Adicionar ao Carrinho</Link>

                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;