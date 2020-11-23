import React from 'react';
import { Bar } from 'react-chartjs-2';

import './../styles/components/vendas.scss';

const data = {
    labels: ['Ganhos', 'Vendas', 'Perdas', 'Liquídos'],
    datasets: [
        {
            label: 'Lucros',
            data: [20000, 7000, 4300, 10000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

function Vendas() {
    return <Bar data={data} options={options} />;
}

export default Vendas;
