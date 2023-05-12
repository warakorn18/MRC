import React, { useState } from 'react';
import './bar.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
// import { Axios } from 'axios';
// import Pagination from 'react-bootstrap/Pagination';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,

    },
  },
};

const labels = ["Monday", "Tuesday", "Wednday", "Thursday", "Friday", "Saturday"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Report',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};






export default function databar() {

  return (<div className='bar-main'> <Bar width={800} height={200} options={options} data={data} />
    <br /><br />
  </div>
  );
}
