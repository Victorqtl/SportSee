'use client';

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

export default function ScoreGraphic({ userMainData }) {
	const roundScore = userMainData.todayScore
		? Math.round(userMainData.todayScore * 100)
		: Math.round(userMainData.score * 100);

	const data = [
		{
			name: 'Max Value',
			value: 100,
			display: 'none',
		},
		{
			name: 'Score',
			value: roundScore,
			fill: '#FF0000',
		},
	];

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<RadialBarChart
				cx='50%'
				cy='50%'
				innerRadius='70'
				outerRadius='100'
				barSize={20}
				data={data}
				startAngle={-270}
				endAngle={90}>
				<circle
					cx='50%'
					cy='50%'
					r='78' // Rayon légèrement inférieur à innerRadius
					fill='#FFFFFF'
				/>
				<RadialBar
					background='true'
					dataKey='value'
					cornerRadius={10}
				/>
				<text
					x='50%'
					y='45%'
					textAnchor='middle'
					dominantBaseline='middle'
					style={{ fontSize: '26px', fontWeight: '600', fill: '#282D30' }}>
					{roundScore}%
				</text>
				<text
					x='50%'
					y='55%'
					textAnchor='middle'
					dominantBaseline='middle'
					style={{ fontSize: '16px', fill: '#74798C' }}>
					de votre
				</text>
				<text
					x='50%'
					y='63%'
					textAnchor='middle'
					dominantBaseline='middle'
					style={{ fontSize: '16px', fill: '#74798C' }}>
					objectif
				</text>
			</RadialBarChart>
		</ResponsiveContainer>
	);
}
