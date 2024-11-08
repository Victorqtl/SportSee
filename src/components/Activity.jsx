'use client';

import { fetchUserActivity } from '@/services/apiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import useFetch from '@/services/useFetch';

export default function Activity({ id }) {
	const { data, loading, error } = useFetch(id, 'activity');

	if (loading) return <div>Loading...</div>;

	if (error) {
		return <div>Une erreur est survenue</div>;
	}

	const { sessions } = data.data ? data.data : data;
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
					bottom: window.innerWidth >= 1280 ? 25 : 0,
				}}
				className='bg-[#FBFBFB] rounded-[5px]'>
				<text
					x='5%'
					y={43}>
					Activité quotidienne
				</text>
				<CartesianGrid
					vertical={false}
					strokeDasharray='3 3'
				/>
				<XAxis
					dataKey='day'
					tickLine={false}
					stroke='#9B9EAC'
					dy={10}
				/>
				<YAxis
					orientation='right'
					tickLine={false}
					axisLine={false}
					stroke='#9B9EAC'
					dx={10}
				/>
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
					wrapperStyle={{
						paddingBottom: window.innerWidth >= 1280 ? 40 : 20,
					}}
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
