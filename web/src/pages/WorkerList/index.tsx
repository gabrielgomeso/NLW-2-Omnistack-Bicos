import React from 'react';

import PageHeader from '../../components/PageHeader';
import WorkerItem from '../../components/WorkerItem';


import './styles.css';

function WorkerList() {
    return (
        <div id="page-worker-list" className="container">
            <PageHeader title="Estas são as pessoas disponíveis." >
                <form id="search-workers">
                    <div className="input-block">
                        <label htmlFor="subject">Tipo de Bico</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />

            </main>
        </div>
    )
}

export default WorkerList;