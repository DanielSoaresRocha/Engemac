import React from 'react';
import './App.css';
import { Map, TileLayer, Marker } from 'react-leaflet'

import Construction from '../src/components/UncontrolledLottie'

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
        <div className='logo'>
          <h1>Engemac</h1>
          <h3>Aqui ficará uma breve descrição sobre a empresa </h3>
        </div>
      </section>

      <div className='images'>
        <div className='img'>
          <div className='img1' />
          <p>Terraplenagem</p>
        </div>
        <div className='img'>
          <div className='img1' />
          <p>Outro serviço</p>
        </div>
        <div className='img'>
          <div className='img1' />
          <p>Outro serviço</p>
        </div>
        <div className='img'>
          <div className='img1' />
          <p>Outro serviço</p>
        </div>
        <div className='img'>
          <div className='img1' />
          <p>Outro serviço</p>
        </div>
      </div>

      <div className='about'>
        <section>
          <Construction />
        </section>
        <section>
          <span>SAIBA MAIS SOBRE A</span>
          <p>Engemac</p>
          <span>Aqui ficará uma descrição mais detalhada da empresa, e o botão levará para uma tela que será
          possível descrever-la melhor. Aqui ficará uma descrição mais detalhada da empresa, e o botão levará
          para uma tela que será possível descrever-la melhor.
        </span>
          <button>Saiba mais</button>
        </section>
      </div>

      <div className='contact'>
        <section>
          <span>Entre em</span>
          <p>Contato</p>
          <form>
            <input placeholder='Nome:' /> <br />
            <input placeholder='Telefone:' /> <br />
            <input type='email' placeholder='Email:' /> <br />
            <textarea placeholder='Mensagem:' /> <br />

            <button type='submit'>Enviar</button>
          </form>
        </section>

        <section>
          <span>Nossa</span>
          <p>Localização</p>
          <Map center={[-5.9279278, -35.2477546]} zoom={15} style={{ width: '100%', height: '100%' }} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-5.9279278, -35.2477546]}></Marker>
          </Map>
        </section>
      </div>
    </div>
  );
}

export default App;
