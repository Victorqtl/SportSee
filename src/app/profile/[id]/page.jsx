import { mockedUserMainData } from '@/components/APICall';
import Activity from '@/components/Activity';
import AverageSessions from '@/components/AverageSessions';
import UserData from '@/components/UserData';
import Performance from '@/components/Perfomance';
import Score from '@/components/Score';

export default async function Profile({ params }) {
	const resolvedParams = await params;
	const { id } = resolvedParams;
	const userMainData = mockedUserMainData(parseInt(id));

	return (
		<>
			<div className='ml-[224px] mr-[112px] mt-[68px]'>
				<h1 className='text-5xl mb-10'>
					Bonjour <span className='text-red-500'>{userMainData.userInfos.firstName}</span>
				</h1>
				<p className='text-lg mb-[77px]'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

				<div className='flex justify-between'>
					<div className='flex flex-col justify-between w-[70%]'>
						<div className='h-[50%] w-[100%]'>
							<Activity id={id} />
						</div>

						<div className='flex justify-between h-[45%]'>
							<div className='h-[100%] w-[30%] bg-[#FF0000] rounded-[5px]'>
								<AverageSessions id={id} />
							</div>

							<div className='h-[100%] w-[30%] bg-[#282D30] rounded-[5px]'>
								<Performance id={id} />
							</div>

							<div className='h-[100%] w-[30%] bg-[#FBFBFB] rounded-[5px]'>
								<Score userMainData={userMainData} />
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-10 w-[20%]'>
						<UserData userMainData={userMainData} />
					</div>
				</div>
			</div>
		</>
	);
}
