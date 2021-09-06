import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Context } from '../../../contexts/DataContext';

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

const generateData = (values) => ({
  labels: values.map(({ name }) => name),
  datasets: [
    {
      label: 'Actors',
      data: values.map(({ movies }) => movies),
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
});

const BarChartActors = () => {
  const { actors = [] } = useContext(Context);

  const data = generateData(actors.sort((a, b) => b.movies - a.movies).slice(0, 5));

  return (
    <>
      <div className="header">
        <h1 className="title">Actors With The Most Movies</h1>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChartActors;
