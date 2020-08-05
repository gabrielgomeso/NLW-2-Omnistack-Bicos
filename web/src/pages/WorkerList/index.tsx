import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import WorkerItem, { Worker } from '../../components/WorkerItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

function WorkerList() {
    const [workers, setWorkers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchWorkers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setWorkers(response.data);
    }

    return (
        <div id="page-worker-list" className="container">
            <PageHeader title="Estas são as pessoas disponíveis." >
                <form id="search-workers" onSubmit={searchWorkers}>
                    <Select
                        name="subject"
                        label="Tipo de Bico"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Encanador', label: 'Encanador' },
                            { value: 'Pintar casa', label: 'Pintar casa' },
                            { value: 'Babá', label: 'Babá' },
                            { value: 'Cortar grama', label: 'Cortar grama' },
                            { value: 'Andar com Pets', label: 'Andar com Pets' },
                            { value: 'Entregar algo', label: 'Entregar algo' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {workers.map((worker: Worker) => {
                    return <WorkerItem key={worker.id} worker={worker} />;
                })}
            </main>
        </div>
    )
}

export default WorkerList;