import logo from '../assets/logo.png';

export default function Header() {
	return (
		<nav className='flex items-center relative z-10 h-28 bg-black text-white text-2xl shadow-lg'>
			<img
				src={logo.src}
				alt='logo'
				className='w-44 flex-none ml-5'
			/>
			<ul className='flex justify-around items-center flex-grow'>
				<li>
					<a
						href='#'
						className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-200 hover:after:w-full'>
						Accueil
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-200 hover:after:w-full'>
						Profil
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-200 hover:after:w-full'>
						Réglage
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-200 hover:after:w-full'>
						Communauté
					</a>
				</li>
			</ul>
		</nav>
	);
}
