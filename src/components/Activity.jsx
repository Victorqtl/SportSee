'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '@/services/useFetch';
import PropTypes from 'prop-types';

/**
 * @component Activity
 * @description Affiche le graphique d'activité quotidienne avec le poids est les calories
 * @param {Object} props
 * @param {string} props.id Identifiant de l'utilisateur
 * @returns {JSX.Element} Graphique en barres
 */
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

	const maxWeight = Math.max(...formattedSessions.map(session => session.kilogram));
	const minWeight = Math.min(...formattedSessions.map(session => session.kilogram));
	const minDomain = minWeight - 2;
	const maxDomain = maxWeight + 1;

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
					strokeDasharray='3'
				/>
				<XAxis
					dataKey='day'
					tickLine={false}
					stroke='#9B9EAC'
					dy={15}
				/>
				<YAxis
					yAxisId='right'
					dataKey='kilogram'
					orientation='right'
					tickLine={false}
					axisLine={false}
					stroke='#9B9EAC'
					dx={20}
					interval={1}
					domain={[minDomain, maxDomain]}
				/>
				<YAxis
					yAxisId='left'
					dataKey='calories'
					orientation='right'
					tickLine={false}
					axisLine={false}
					hide={true}
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
					yAxisId='right'
					barSize={10}
					dataKey='kilogram'
					name='Poids (kg)'
					fill='#282D30'
					radius={[5, 5, 0, 0]}
				/>
				<Bar
					yAxisId='left'
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

Activity.propTypes = {
	id: PropTypes.string.isRequired,
};
