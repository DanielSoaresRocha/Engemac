import React from 'react';
import './App.css';

function App () {
  const logo = 'https://www.projetoweb.com.br/sites-padrao-prontos-simples-baratos-lancamentos/'
    + 'padrao6-programado/template/pw-images/logo.png'
  return (
    <div className="containerHome">
      <header>
        <img src={logo} alt='Logo Engemac' />
        <div className='space'>
        </div>
        <div className='menu'>
          <p>HOME</p>
          <p>SOBRE</p>
          <p>SERVIÇOS</p>
          <p>PORTFÓLIO</p>
          <p>CONTATO</p>
        </div>
      </header>

      <section>
        <img alt='Terraplanagem' src='https://www.kannaterraplenagem.com.br/arquivos/31975-d1cef-terraplanagem-canarana-mt.jpg' />
        <div className='about'>
          <h1>Engemac</h1>
          <h3>Aqui ficará uma breve descrição sobre a empresa </h3>
        </div>
      </section>

      <div className='images'>
        <div className='img'>
          <img alt='imagem' />
          <p>Terraplenagem</p>
        </div>
        <div className='img'>
          <img alt='imagem' />
          <p>Outro serviço</p>
        </div>
        <div className='img'>
          <img alt='imagem' />
          <p>Outro serviço</p>
        </div>
        <div className='img'>
          <img alt='imagem' />
          <p>Outro serviço</p>
        </div>
        <div className='img'>
          <img alt='imagem' />
          <p>Outro serviço</p>
        </div>
      </div>
    </div>
  );
}

export default App;
