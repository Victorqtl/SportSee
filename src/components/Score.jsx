import ScoreGraphic from './ScoreGraphic';

export default function Score({ userMainData }) {
	const roundScore = userMainData.todayScore
		? Math.round(userMainData.todayScore * 100)
		: Math.round(userMainData.score * 100);
	return (
		<div>
			<div className='h-[200px] w-[200px]'>
				<ScoreGraphic roundScore={roundScore} />
			</div>
			{roundScore}
		</div>
	);
}
