import React, { useState, useEffect } from 'react';
import './App.css';
import { Map, TileLayer, Marker } from 'react-leaflet'
import Favicon from 'react-favicon';

import logo from './assets/logo2.png'
import img6 from './assets/img6.jpg'
import favicon from './assets/favicon.ico'

import Construction from '../src/components/UncontrolledLottie'

function App () {
  const [autdoor, setAutdoor] = useState('')

  const img1 = 'https://www.kannaterraplenagem.com.br/arquivos/31975-d1cef-terraplanagem-canarana-mt.jpg'
  const img2 = 'https://imagens-voitto.s3.amazonaws.com/imagens-blog/meta/c0752edfe1641aafffb53a6fcb476885.jpg'
  const imgs = [img1, img6, img2]
  let position = 0
  useEffect(() => {
    setAutdoor(img1)
    const interval = setInterval(() => {
      setAutdoor(imgs[position])
      // eslint-disable-next-line
      position === imgs.length - 1 ? position = 0 : position++
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="containerHome">
      <Favicon url={favicon} />
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
        <img alt='Terraplanagem' src={autdoor} />
        <div className='logo'>
          <h1>Engemac</h1>
          <h3>Aqui ficará uma breve descrição sobre a empresa </h3>
        </div>
      </section>

      <div className='images'>
        <div className='img'>
          <div className='img1'>
            <p>EQUIPAMENTOS</p>
          </div>
        </div>
        <div className='img'>
          <div className='img1'>
            <p>CONSTRUÇÃO CÍVIL</p>
          </div>
        </div>
        <div className='img'>
          <div className='img1'>
            <p>TECNOLOGIA CONSTRUTIVA</p>
          </div>
        </div>
        <div className='img'>
          <div className='img1'>
            <p>CONTRATAÇÃO DE MÃO DE OBRA</p>
          </div>
        </div>
        <div className='img'>
          <div className='img1'>
            <p>TERRAPLENAGEM</p>
          </div>
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
            <input required={true} placeholder='Nome:' /> <br />
            <input type='number' required={true} placeholder='Telefone:' /> <br />
            <input required={true} type='email' placeholder='Email:' /> <br />
            <textarea required={true} placeholder='Mensagem:' /> <br />

            <button type='submit'>Enviar</button>
          </form>
        </section>
        <section>
          <span>Nossa</span>
          <p>Localização</p>

          <Map center={[-5.9279278, -35.2477546]} zoom={15} className='map'>
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
