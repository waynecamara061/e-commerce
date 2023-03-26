import React from 'react';
import './Finally.scss';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHeader/SubHeader';

const Finally = () => {
    return (
        <section>
            <SubHeader />
            <div className='section-finally'>
                <div className='finally-container'>
                    <h1 className='title-form'> Finalizar compra</h1>
                    <div className='finally-form-container'>
                        <div className='inpt-nome'>
                            <h1> Digite seu nome:</h1>
                            <input type="text" placeholder='Nome completo' />
                        </div>
                        <div className='inpt-cpf'>
                            <h1>Digite seu CPF:</h1>
                            <input type="text" placeholder='000.000.000.00' />
                        </div>
                        <div className='inpt-endereco'>
                            <h1>Endereço:</h1>
                            <input type="text" placeholder='***************' />
                        </div>
                        <div className='inpt-pagamento'>
                            <h1>Forma de Pagamento:</h1>
                            <input type="text" placeholder='***************' />
                        </div>
                        <div className='btn-confirmar'>
                            <button className='btn-confirm'>Confirmar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Finally;