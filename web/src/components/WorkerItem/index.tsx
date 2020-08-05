import React from 'react';

import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


export interface Worker {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string
    whatsapp: string;
}

interface WorkerItemProps {
    worker: Worker;
}

const WorkerItem: React.FC<WorkerItemProps> = ({ worker }) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: worker.id, 
        })
    }

    return (
        <article className="worker-item">
            <header>
                <img src={worker.avatar} alt={worker.name} />
                <div>
                    <strong>{worker.name}</strong>
                    <span>{worker.subject}</span>
                </div>
            </header>

            <p> {worker.bio} </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ {worker.cost}</strong>
                </p>
                <a 
                    target="_blank" 
                    onClick={createNewConnection} 
                    href={`https://wa.me/${worker.whatsapp}`} 
                    type="button"
                >
                    <img src={whatsappIcon} alt="Entrar em contato por Whatsapp" />
                Entrar em contato
            </a>
            </footer>
        </article>
    )
}

export default WorkerItem;