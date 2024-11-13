'use client';

import PropTypes from 'prop-types';
import useFetch from '@/services/useFetch';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * @component Performance
 * @description Affiche le graphique des performances de l'utilisateur
 * @param {Object} props
 * @param {string} props.id L'identifiant de l'utilisateur
 * @returns {JSX.Element} Graphique radar
 */
export default function Performance({ id }) {
	const { data, loading, error } = useFetch(id, 'performance');

	if (loading) return <div>Loading...</div>;

	if (error) {
		return <div>Une erreur est survenue</div>;
	}

	const perfomanceData = data.data ? data.data : data;
	const formattedData = perfomanceData.data
		.map(item => ({
			...item,
			kind: perfomanceData.kind[item.kind],
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
				<PolarGrid
					stroke='#FFFFFF'
					radialLines={false}
				/>
				<PolarAngleAxis
					dataKey='kind'
					tick={{
						fill: '#FFFFFF',
						fontSize: window.innerWidth >= 1280 ? 12 : 8,
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

Performance.propTypes = {
	id: PropTypes.string.isRequired,
};
