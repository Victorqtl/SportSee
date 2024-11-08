'use client';

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import useFetch from '@/services/useFetch';

export default function AverageSessions({ id }) {
	const { data, loading, error } = useFetch(id, 'average-sessions');

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		return <div>Une erreur est survenue</div>;
	}

	const averageSessions = data.data ? data.data : data;

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<LineChart
				data={averageSessions.sessions}
				margin={{
					top: 50,
					bottom: 30,
				}}>
				<XAxis
					tickMargin={10}
					padding={{ left: 10, right: 10 }}
					dataKey='day'
					axisLine={false}
					tickLine={false}
					tick={{ fill: '#FFFFFF' }}
				/>
				<Tooltip
					itemStyle={{ color: '#000' }}
					formatter={value => [`${value} min`]}
					labelFormatter={() => ''}
					cursor={false}
				/>
				<Line
					type='monotone'
					dataKey='sessionLength'
					name='sessionLength'
					stroke='#FFFFFF'
					dot={false}
					activeDot={{ r: 4, fill: '#FFFFFF' }}
				/>
				<text
					x='8%'
					y='12%'
					textAnchor='left'
					dominantBaseline='middle'
					className='xl:text-[16px] lg:text-[14px] fill-[#FFFFFF]'>
					Durée moyenne des
				</text>
				<text
					x='8%'
					y='19%'
					textAnchor='left'
					dominantBaseline='middle'
					className='xl:text-[16px] lg:text-[14px] fill-[#FFFFFF]'>
					sessions
				</text>
			</LineChart>
		</ResponsiveContainer>
	);
}
