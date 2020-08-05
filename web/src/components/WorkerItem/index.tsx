import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function WorkerItem(){
    return (
        <article className="worker-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/17833683?s=460&u=1b95ad233192dcc057d416c0222fb48760c0aca1&v=4" alt="Gabriel Gomes" />
            <div>
                <strong>Gabriel Gomes</strong>
                <span>Encanador</span>
            </div>
        </header>

        <p>
            Meu nome é Gabriel e para juntar uma grana e comprar um notebook aprendi a arrumar as coisas de casa.
            <br />
            Sei trocar encanamentos, concertar pias e registros e faço tudo isso no precinho justo. Me manda uma mensagem e fazemos um orçamento!
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$35,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato por Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default WorkerItem;