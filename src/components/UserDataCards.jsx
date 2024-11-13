import PropTypes from 'prop-types';
import energy from '@/assets/energy.svg';
import chicken from '@/assets/chicken.svg';
import apple from '@/assets/apple.svg';
import burger from '@/assets/burger.svg';

/**
 * @component UserDataCards
 * @description Affiche les cartes des données nutritionnelles de l'utilisateur
 * @param {Object} props
 * @param {Object} props.userMainData - Données principales de l'utilisateur
 * @param {Object} props.userMainData.keyData - Données nutritionnelles
 * @param {number} props.userMainData.keyData.calorieCount - Calories (kCal)
 * @param {number} props.userMainData.keyData.proteinCount - Protéines (g)
 * @param {number} props.userMainData.keyData.carbohydrateCount - Glucides (g)
 * @param {number} props.userMainData.keyData.lipidCount - Lipides (g)
 * @returns {JSX.Element} Cartes des données nutritionnelles
 */
export default function UserDataCards({ userMainData }) {
	return (
		<>
			<div className='flex items-center justify-around w-[100%] h-[20%] bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-red-100 rounded-md'>
					<img
						src={energy.src}
						alt='feu'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='xl:text-xl lg:text-lg font-bold'>{userMainData.keyData.calorieCount}kCal</p>
					<p className='text-sm text-[#74798C]'>Calories</p>
				</div>
			</div>
			<div className='flex items-center justify-around w-[100%] h-[20%] bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-blue-100 rounded-md'>
					<img
						src={chicken.src}
						alt='Cuisse de poulet'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='xl:text-xl lg:text-lg font-bold'>{userMainData.keyData.proteinCount}g</p>
					<p className='text-sm text-[#74798C]'>Proteines</p>
				</div>
			</div>
			<div className='flex items-center justify-around w-[100%] h-[20%] bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-yellow-100 rounded-md'>
					<img
						src={apple.src}
						alt='Logo énergie'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='xl:text-xl lg:text-lg font-bold'>{userMainData.keyData.carbohydrateCount}g</p>
					<p className='text-sm text-[#74798C]'>Glucides</p>
				</div>
			</div>
			<div className='flex items-center justify-around w-[100%] h-[20%] bg-[#FBFBFB] rounded-[5px]'>
				<div className='flex justify-center items-center w-[60px] h-[60px] bg-pink-100 rounded-md'>
					<img
						src={burger.src}
						alt='Logo énergie'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='xl:text-xl lg:text-lg font-bold'>{userMainData.keyData.lipidCount}g</p>
					<p className='text-sm text-[#74798C]'>Lipides</p>
				</div>
			</div>
		</>
	);
}

UserDataCards.propTypes = {
	userMainData: PropTypes.shape({
		keyData: PropTypes.shape({
			calorieCount: PropTypes.number,
			proteinCount: PropTypes.number,
			carbohydrateCount: PropTypes.number,
			lipidCount: PropTypes.number,
		}),
	}).isRequired,
};
