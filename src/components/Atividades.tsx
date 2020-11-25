import React from 'react';

import { FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { TiGroup } from 'react-icons/ti';
import { BiCalendarExclamation } from 'react-icons/bi';

import { IAtividade, IItem } from './../@types/atividades.dto';
import './../styles/components/atividades.scss';

const atividades: IAtividade[] = [
    {
        labelFilter: 'Em atraso',
        titleType: 'Atividades em atraso',
        color: '#c74027',
        items: [
            {
                icon: <FaPhoneAlt />,
                title: 'Ligação de agendamento da reunião',
                autor: 'Erica Collins',
                data: 'Em atraso por 04 dias',
            },
            {
                icon: <FaPhoneAlt />,
                title: 'Ligação de agendamento da reunião',
                autor: 'Erica Collins',
                data: 'Em atraso por 04 dias',
            },
            {
                icon: <FaPhoneAlt />,
                title: 'Ligação de agendamento da reunião',
                autor: 'Erica Collins',
                data: 'Em atraso por 04 dias',
            },
            {
                icon: <FaPhoneAlt />,
                title: 'Ligação de agendamento da reunião',
                autor: 'Erica Collins',
                data: 'Em atraso por 04 dias',
            },
            {
                icon: <FaPhoneAlt />,
                title: 'Ligação de agendamento da reunião',
                autor: 'Erica Collins',
                data: 'Em atraso por 04 dias',
            },
        ],
    },
    {
        labelFilter: 'Em andamento',
        titleType: 'Atividades em andamento',
        color: '#2676d2',
        items: [],
    },
    {
        labelFilter: 'Previstas',
        titleType: 'Atividades previstas',
        color: '#f0a724',
        items: [
            {
                icon: <TiGroup />,
                title: 'Reunião orçamento',
                autor: 'Abigail Fisher',
                data: 'Hoje às 15h',
            },
            {
                icon: <IoMdMail />,
                title: 'Email documentação',
                autor: 'Jeffery King',
                data: 'Amanhã às 9:45',
            },
            {
                icon: <BiCalendarExclamation />,
                title: 'Almoço coorperativo',
                autor: 'Lawrence Kelly',
                data: 'Amanhã às 15h',
            },
        ],
    },
    {
        labelFilter: 'Concluídas',
        titleType: 'Atividades concluídas',
        color: '#457e32',
        items: [
            {
                icon: <BiCalendarExclamation />,
                title: 'Apresentação feira agrícola',
                autor: 'Caroline Diaz',
                data: 'Segunda-feira (17/09/2018) às 08h',
            },
            {
                icon: <IoMdMail />,
                title: 'Email orçamento',
                autor: 'Artur Clark',
                data: 'Terça-feira (18/09/2018) às 13h',
            },
            {
                icon: <IoMdMail />,
                title: 'Email contrato',
                autor: 'Frieda Howard',
                data: 'Quarta-feira (19/09/2018) às 10h',
            },
            {
                icon: <FaPhoneAlt />,
                title: 'Ligação contrato',
                autor: 'Dylan Watsor',
                data: 'Quarta-feira (19/09/2018) às 13h',
            },
        ],
    },
];

class Atividades extends React.Component<
    {},
    {
        atividades: IAtividade[];
        filtros: JSX.Element[];
        dataTypes: JSX.Element[];
        filtroAtivo: number;
        valueSearch: string;
    }
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            atividades: atividades,
            filtros: this.renderFiltros(atividades),
            dataTypes: this.renderTypes(atividades),
            valueSearch: '',
            filtroAtivo: 0,
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    resetSearch() {
        this.setState({ valueSearch: '' });
    }

    handleSearch(event: any) {
        const valueSearch: string = event.target.value;

        let atividadesPesquisadas: IAtividade[] = [];
        const atividadesFiltradas =
            this.state.filtroAtivo > 0
                ? [this.state.atividades[this.state.filtroAtivo - 1]]
                : this.state.atividades;
        if (valueSearch) {
            atividadesFiltradas.map((value) => {
                const result: IItem[] = [];

                value.items.map((item) => {
                    if (item.title.match(new RegExp(valueSearch, 'gi'))) {
                        result.push(item);
                    }
                });

                if (result.length)
                    atividadesPesquisadas.push({ ...value, items: result });
            });
        } else {
            atividadesPesquisadas = atividadesFiltradas;
        }

        this.setState({
            valueSearch,
            dataTypes: this.renderTypes(atividadesPesquisadas),
        });
    }

    selectFilter(position: number) {
        this.resetSearch();
        const atividadesFiltradas =
            position > 0
                ? [this.state.atividades[position - 1]]
                : this.state.atividades;
        this.setState({
            filtros: this.renderFiltros(this.state.atividades, position),
            dataTypes: this.renderTypes(atividadesFiltradas),
            filtroAtivo: position,
        });
    }

    renderTypes(atividades: IAtividade[]) {
        const result: JSX.Element[] = [];

        atividades.map((value, i) => {
            const items: JSX.Element[] = [];

            if (value.items.length) {
                value.items.map((item, j) => {
                    items.push(
                        <div className="row" key={`item-${j}`}>
                            <div className="col-auto icon">{item.icon}</div>
                            <div className="col">
                                <div className="row title-atividade">
                                    {item.title}
                                </div>
                                <div className="row autor">{item.autor}</div>
                                <div className="row data">{item.data}</div>
                            </div>
                        </div>,
                    );
                });

                result.push(
                    <div className="row" key={`categoria-${i}`}>
                        <div className="atividade" data-color={value.color}>
                            <div className="row title-type">
                                {value.titleType}
                            </div>
                            {items}
                        </div>
                    </div>,
                );
            }
        });

        if (result.length) return result;
        else
            return [
                <div className="no-data">
                    <p>Nada a ser exibido</p>
                </div>,
            ];
    }

    renderFiltros(atividades: IAtividade[], activePosition: number = 0) {
        const filtros: JSX.Element[] = [];
        let countTotal = 0;

        atividades.map((value, i) => {
            countTotal += value.items.length;
            const key = i + 1;

            filtros.push(
                <div
                    className="col-auto row justify-content-center align-items-center filter"
                    data-active={activePosition === key}
                    onClick={() => this.selectFilter(key)}
                    key={`filtro-${key}`}
                >
                    <div
                        className="count"
                        style={{ backgroundColor: value.color }}
                    >
                        {value.items.length}
                    </div>
                    <div className="label">{value.labelFilter}</div>
                </div>,
            );
        });

        filtros.unshift(
            <div
                className="col-auto row justify-content-center align-items-center filter"
                key="filtro-0"
                data-active={activePosition === 0}
                onClick={() => this.selectFilter(0)}
            >
                <div className="count" style={{ backgroundColor: '#424242' }}>
                    {countTotal}
                </div>
                <div className="label">Total</div>
            </div>,
        );

        return filtros;
    }

    render() {
        return (
            <section className="atividades">
                <div className="row">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        className="search"
                        placeholder="Pesquisar"
                        onChange={this.handleSearch}
                        value={this.state.valueSearch}
                    />
                </div>
                <div className="row justify-content-between align-items-center my-20 filters">
                    {this.state && this.state.filtros}
                </div>
                <section className="atividades-block">
                    {this.state && this.state.dataTypes}
                </section>
            </section>
        );
    }
}

export default Atividades;
