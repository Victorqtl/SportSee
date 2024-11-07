import { mockedUserMainData } from '@/components/APICall';
import Activity from '@/components/Activity';
import AverageSessions from '@/components/AverageSessions';
import UserDataCards from '@/components/UserDataCards';
import Performance from '@/components/Perfomance';
import Score from '@/components/Score';

export default async function Profile({ params }) {
	const resolvedParams = await params;
	const { id } = resolvedParams;
	const userMainData = mockedUserMainData(parseInt(id));

	return (
		<>
			<div className='xl:ml-[224px] xl:mr-[112px] lg:ml-[172px] lg:mr-[70px] xl:mt-[68px] lg:mt-[50px]'>
				<h1 className='text-5xl mb-10'>
					Bonjour <span className='text-red-500'>{userMainData.userInfos.firstName}</span>
				</h1>
				<p className='text-lg xl:mb-[77px] lg:mb-[50px]'>
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>

				<div className='flex justify-between xl:h-[600px] lg:h-[430px]'>
					<div className='flex flex-col justify-between w-[70%]'>
						<div className='h-[50%] w-[100%]'>
							<Activity id={id} />
						</div>

						<div className='flex justify-between xl:h-[45%] lg:h-[40%]'>
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
					<div className='flex flex-col justify-between xl:w-[20%] lg:w-[25%] h-[100%]'>
						<UserDataCards userMainData={userMainData} />
					</div>
				</div>
			</div>
		</>
	);
}
