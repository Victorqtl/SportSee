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
				innerRadius='50%'
				outerRadius='90%'
				barSize={17}
				data={data}
				startAngle={-270}
				endAngle={90}>
				<circle
					cx='50%'
					cy='50%'
					r='30%'
					fill='#FFFFFF'
				/>
				<RadialBar
					background='true'
					dataKey='value'
					cornerRadius={10}
				/>
				<text
					x='8%'
					y='12%'
					textAnchor='left'
					dominantBaseline='middle'
					className='xl:text-[16px] lg:text-[14px]'>
					Score
				</text>
				<text
					x='50%'
					y='45%'
					textAnchor='middle'
					dominantBaseline='middle'
					className='xl:text-[26px] lg:text-[22px] font-semibold fill-[#282D30]'>
					{roundScore}%
				</text>
				<text
					x='50%'
					y='55%'
					textAnchor='middle'
					dominantBaseline='middle'
					className='xl:text-[16px] lg:text-[12px] fill-[#74798C]'>
					de votre
				</text>
				<text
					x='50%'
					y='63%'
					textAnchor='middle'
					dominantBaseline='middle'
					className='xl:text-[16px] lg:text-[12px] fill-[#74798C]'>
					objectif
				</text>
			</RadialBarChart>
		</ResponsiveContainer>
	);
}
