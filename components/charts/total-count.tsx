import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
const data = {
  labels: ['Hyderabad', 'Secunderabad', 'Chevella', 'Mahbubnagar', 'Nagarkurnool', 'NALLAGONDA', 'Bhuvangiri', 'Warangal'],
  datasets: [{
    label: '# of Voters',
    data: [12, 19, 3, 5, 2, 3, 7, 8],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(54, 162, 235, 1)'
    ],
    borderWidth: 1
  }]
}


export default function TotalCount ()  {
    return(
        <div>
        
        <Bar
          data={data}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
)};