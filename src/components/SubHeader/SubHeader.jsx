import React from 'react';
import './SubHeader.scss';
import Search from '../Search/Search';
import Nav from '../NavMenu/Nav';

function SubHeader() {
    return (
      <section className='first-section'>
        <div className='subHeader-container'>
          <img src="logo-dnc.png" alt="DNC" className='logo-dnc' />
          <Search />
          <img src="carrinho.png" alt="Carrinho" className='carrinho-img' />
        </div>
        <Nav />
      </section>
    )
  }

export default SubHeader;