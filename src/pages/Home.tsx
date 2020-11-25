import React from 'react';

import '../styles/pages/home.scss';

import Card from '../components/Card';
import InfoGeral from '../components/InfoGeral';
import Vendas from '../components/Vendas';
import Local from '../components/Local';
import Atividades from '../components/Atividades';

function Home() {
    return (
        <section className="home">
            <div className="col-3">
                <div className="row">
                    <Card title="Informações gerais">
                        <InfoGeral />
                    </Card>
                </div>
                {/* <div className="row mt-10">
                    <Card title="Oportunidades (7)" showBtnInfo={true}>
                        <p>Card Content</p>
                    </Card>
                </div> */}
                <div className="row mt-10">
                    <Card title="Vendas">
                        <Vendas />
                    </Card>
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <Card title="Local">
                        <Local />
                    </Card>
                </div>
                {/* <div className="row mt-10">
                    <Card title="Limite de crédito">
                        <p>Card Content</p>
                    </Card>
                </div>
                <div className="row mt-10">
                    <Card title="Títulos financeiros">
                        <p>Card Content</p>
                    </Card>
                </div> */}
            </div>
            <div className="col-6">
                <Card title="Atividades">
                    <Atividades />
                </Card>
            </div>
        </section>
    );
}

export default Home;
