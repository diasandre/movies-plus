import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    'Christopher Nolan',
    'Martin Scorsese',
    'Stanley Kubrick',
    'Steven Spielberg',
    'Charlie Chaplin',
    'Akira Kurosawa',
    'Alfred Hitchcock',
    'Quentin Tarantino',
  ],
  datasets: [
    {
      label: 'Movies',
      data: [7, 7, 7, 6, 6, 6, 6, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
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

const BarChart = () => (
  <>
    <div className="header">
      <h1 className="title">Directors With The Most Movies</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default BarChart;
