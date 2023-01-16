import React from 'react';
import {Chart,ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'


    Chart.register(ArcElement)
const data = {
	labels: [
		'Female',
		'Male',
		'Other'
	],
	datasets: [{
		data: [300, 400, 10],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default function GenderData ()  {
    return(
	<div>
		
		<Doughnut
			data={data}
			width={300}
			height={300}
		/>
	</div>
)};