'use client';

import { mockedUserPerformance } from './APICall';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function Performance({ id }) {
	const performance = mockedUserPerformance(parseInt(id));

	const formattedData = performance.data
		.map(item => ({
			...item,
			kind: performance.kind[item.kind],
		}))
		.reverse();
	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<RadarChart
				cx='50%'
				cy='50%'
				outerRadius='70%'
				data={formattedData}>
				<PolarGrid stroke='#FFFFFF' />
				<PolarAngleAxis
					dataKey='kind'
					tick={{
						fill: '#FFFFFF',
						fontSize: 12,
					}}
					dy={3}
				/>
				<Radar
					dataKey='value'
					fill='#FF0101'
					fillOpacity={0.6}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
}
