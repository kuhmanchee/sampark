import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Office', 'Call Center', 'Door-2-Door', 'IVRS', 'Facebook', 'Sabha', 'Rallies'],
  datasets: [
    {
      label: 'Online',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'Offline',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 50]
    }
  ]
};


export default function Impact ()  {
    return(
        <div>
    <Radar
      data={data}
      width={300}
      height={300}
    />
  </div>
)};