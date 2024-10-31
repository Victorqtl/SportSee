import './globals.css';
import Header from '@/components/Header';
import VerticalNav from '@/components/VerticalNav';

export const metadata = {
	title: 'SportSee',
	description: 'The best sports tracking app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='fr'>
			<body>
				<header>
					<Header />
				</header>
				<VerticalNav />
				<main>{children}</main>
			</body>
		</html>
	);
}
