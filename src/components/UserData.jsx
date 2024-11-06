import energy from '@/assets/energy.svg';
import chicken from '@/assets/chicken.svg';
import apple from '@/assets/apple.svg';
import burger from '@/assets/burger.svg';

export default function UserMainData({ userMainData }) {
	return (
		<>
			<div className='flex items-center gap-6 w-[100%] h-[124px] p-8 bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-red-200 rounded-md'>
					<img
						src={energy.src}
						alt='feu'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold'>{userMainData.keyData.calorieCount}kCal</p>
					<p className='text-sm text-[#74798C]'>Calories</p>
				</div>
			</div>
			<div className='flex items-center gap-6 w-[100%] h-[124px] p-8 bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-blue-200 rounded-md'>
					<img
						src={chicken.src}
						alt='Cuisse de poulet'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold'>{userMainData.keyData.proteinCount}g</p>
					<p className='text-sm text-[#74798C]'>Proteines</p>
				</div>
			</div>
			<div className='flex items-center gap-6 w-[100%] h-[124px] p-8 bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-yellow-200 rounded-md'>
					<img
						src={apple.src}
						alt='Logo énergie'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold'>{userMainData.keyData.carbohydrateCount}g</p>
					<p className='text-sm text-[#74798C]'>Glucides</p>
				</div>
			</div>
			<div className='flex items-center gap-6 w-[100%] h-[124px] p-8 bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-pink-200 rounded-md'>
					<img
						src={burger.src}
						alt='Logo énergie'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold'>{userMainData.keyData.lipidCount}g</p>
					<p className='text-sm text-[#74798C]'>Lipides</p>
				</div>
			</div>
		</>
	);
}
