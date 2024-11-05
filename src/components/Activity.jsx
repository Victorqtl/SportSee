'use client';

import { mockedUserActivity } from '@/components/APICall';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Activity({ id }) {
	const activity = mockedUserActivity(parseInt(id));

	const { sessions } = activity;
	const formattedSessions = sessions.map(session => ({
		...session,
		day: parseInt(session.day.slice(-2)),
	}));

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<BarChart
				data={formattedSessions}
				margin={{
					top: 25,
					right: 25,
					left: 25,
					bottom: 25,
				}}
				style={{ background: '#FBFBFB' }}>
				<CartesianGrid
					vertical={false}
					strokeDasharray='3 3'
				/>
				<XAxis dataKey='day' />
				<YAxis orientation='right' />
				<Tooltip
					contentStyle={{ backgroundColor: '#E60000', color: '#fff' }}
					itemStyle={{ color: '#fff' }}
					formatter={(value, name) => {
						if (name === 'Poids (kg)') {
							return [`${value} kg`];
						} else if (name === 'Calories brûlées (kCal)') {
							return [`${value} cal`];
						}
						return null;
					}}
					labelFormatter={() => ''}
				/>
				<Legend
					align='right'
					verticalAlign='top'
					iconType='circle'
					wrapperStyle={{ paddingBottom: 45 }}
				/>
				<Bar
					barSize={10}
					dataKey='kilogram'
					name='Poids (kg)'
					fill='#282D30'
					radius={[5, 5, 0, 0]}
				/>
				<Bar
					barSize={10}
					dataKey='calories'
					name='Calories brûlées (kCal)'
					fill='#E60000'
					radius={[5, 5, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
