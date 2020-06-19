import React from 'react'

import './styles.css'

function Menu () {
    return (
        <div className="container-menu">
            <input id="input" type='checkbox'></input>

            <label htmlFor='input'>
                <div className='menu-burguer'>
                    <span className='burguer'></span>
                </div>
            </label>

            <ul>
                <li>HOME</li>
                <li>SOBRE</li>
                <li>SERVIÇOS</li>
                <li>PORTFÓLIO</li>
                <li>CONTATO</li>
            </ul>
        </div>
    )
}

export default Menu