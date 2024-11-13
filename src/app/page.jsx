import karl from '../assets/karl.svg';
import cecilia from '../assets/cecilia.svg';
import Link from 'next/link';

export default function Page() {
	return (
		<div className='flex justify-center gap-44 mt-20 ml-28'>
			<Link href='/profile/12'>
				<div className='flex flex-col items-center gap-5'>
					<img
						src={karl.src}
						alt='karl'
						className='w-[250px] shadow-xl rounded-full hover:scale-105 transition duration-200'
					/>
					<p className='text-2xl'>Karl</p>
				</div>
			</Link>
			<Link href='/profile/18'>
				<div className='flex flex-col items-center gap-5'>
					<img
						src={cecilia.src}
						alt='cecilia'
						className='w-[250px] shadow-xl rounded-full hover:scale-105 transition duration-200'
					/>
					<p className='text-2xl'>Cécilia</p>
				</div>
			</Link>
		</div>
	);
}
