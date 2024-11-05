import yoga from '../assets/yoga.svg';
import swim from '../assets/swim.svg';
import bike from '../assets/bike.svg';
import dumbbell from '../assets/dumbbell.svg';

export default function VerticalNav() {
	return (
		<nav className='flex flex-col items-center justify-center absolute top-0 w-28 h-screen bg-black shadow-lg'>
			<ul className='flex flex-col gap-y-5'>
				<li className='flex items-center justify-center w-16 h-16 bg-white rounded-md cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out'>
					<img
						src={yoga.src}
						alt='logo yoga'
						className='w-9'
					/>
				</li>
				<li className='flex items-center justify-center w-16 h-16 bg-white rounded-md cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out'>
					<img
						src={swim.src}
						alt='logo nage'
					/>
				</li>
				<li className='flex items-center justify-center w-16 h-16 bg-white rounded-md cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out'>
					<img
						src={bike.src}
						alt='logo vélo'
					/>
				</li>
				<li className='flex items-center justify-center w-16 h-16 bg-white rounded-md cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out'>
					<img
						src={dumbbell.src}
						alt='logo haltère'
					/>
				</li>
			</ul>
			<p className='absolute bottom-28 -rotate-90 text-white text-xs whitespace-nowrap'>
				Copyright, SportSee 2020
			</p>
		</nav>
	);
}
