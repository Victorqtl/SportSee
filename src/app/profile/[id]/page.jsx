import { mockedUserMainData } from '@/components/APICall';
import Activity from '@/components/Activity';
import UserData from '@/components/UserData';
import Score from '@/components/Score';
import ScoreGraphic from '@/components/ScoreGraphic';

export default async function Profile({ params }) {
	const resolvedParams = await params;
	const { id } = resolvedParams;
	const userMainData = mockedUserMainData(parseInt(id));

	return (
		<>
			<div className='max-w-[70%] ml-[224px] mt-[68px]'>
				<h1 className='text-5xl mb-10'>
					Bonjour <span className='text-red-500'>{userMainData.userInfos.firstName}</span>
				</h1>
				<p className='text-lg mb-[77px]'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				<div className='flex justify-between'>
					<div className='flex flex-col'>
						<div className='h-[320px] w-[835px]'>
							<Activity id={id} />
						</div>
						<div className='h-[263px] w-[268px] bg-[#FBFBFB]'>
							<ScoreGraphic userMainData={userMainData} />
						</div>
					</div>
					<div className='flex flex-col gap-8'>
						<UserData userMainData={userMainData} />
					</div>
				</div>
			</div>
		</>
	);
}
