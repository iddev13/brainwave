import { HeaderLogo } from '@/components/header-logo';
import { Navigation } from '@/components/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export const Header = () => {
	return (
		<header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-700 to-rose-300 px-4 py-2 lg:px-14 dark:from-blue-900">
			<div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex items-center lg:justify-between">
					<HeaderLogo />
					<Navigation />
					<div className="flex items-center justify-center">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};
