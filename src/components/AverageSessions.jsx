'use client';

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import useFetch from '@/services/useFetch';
import PropTypes from 'prop-types';

const CustomCursor = ({ points }) => {
	return (
		<rect
			x={points[0].x}
			y={0}
			width='100%'
			height='100%'
			fill='rgba(0, 0, 0, 0.1)'
		/>
	);
};

/**
 * @component AverageSessions
 * @description Affiche le graphique de la durée moyenne des sessions pour chaque jour
 * @param {Object} props
 * @param {string} props.id L'identifiant de l'utilisateur
 * @returns {JSX.Element} Graphique linéaire
 */
export default function AverageSessions({ id }) {
	const { data, loading, error } = useFetch(id, 'average-sessions');

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		return <div>Une erreur est survenue</div>;
	}

	const dayMapping = {
		1: 'L',
		2: 'M',
		3: 'M',
		4: 'J',
		5: 'V',
		6: 'S',
		7: 'D',
	};

	const averageSessions = data.data ? data.data : data;

	const formattedSessions = averageSessions.sessions.map(session => ({
		...session,
		day: dayMapping[session.day],
	}));

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<LineChart
				data={formattedSessions}
				margin={{
					top: 100,
					bottom: 30,
				}}>
				<XAxis
					tickMargin={10}
					dataKey='day'
					axisLine={false}
					tickLine={false}
					tick={{ fill: '#FFFFFF' }}
					domain={['dataMin', 'dataMax']}
					interval='preserveStartEnd'
				/>
				<Tooltip
					itemStyle={{ color: '#000' }}
					formatter={value => [`${value} min`]}
					labelFormatter={() => ''}
					cursor={<CustomCursor />}
				/>
				<Line
					type='monotone'
					dataKey='sessionLength'
					name='sessionLength'
					stroke='#FFFFFF'
					strokeWidth={2}
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

AverageSessions.propTypes = {
	id: PropTypes.string.isRequired,
};

CustomCursor.propTypes = {
	points: PropTypes.arrayOf(
		PropTypes.shape({
			x: PropTypes.number.isRequired,
		})
	).isRequired,
};
