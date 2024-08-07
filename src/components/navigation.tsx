'use client';

import { useState } from 'react';
import { useMedia } from 'react-use';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { NavButton } from '@/components/nav-button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const routes = [
	{
		href: '/',
		label: 'Overview',
	},
	{
		href: '/transactions',
		label: 'Transactions',
	},
	{
		href: '/accounts',
		label: 'Accounts',
	},
	{
		href: '/categories',
		label: 'Categories',
	},
	{
		href: '/settings',
		label: 'Settings',
	},
];

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const router = useRouter();
	const pathname = usePathname();
	const isMobile = useMedia('(max-width: 1024px)', false);

	const onClick = (href: string) => {
		router.push(href);
		setIsOpen(false);
	};

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger>
					<div className="size-8 rounded-sm flex items-center justify-center font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition mr-2 lg:mr-0">
						<Menu className="size-4" />
					</div>
				</SheetTrigger>
				<SheetContent side="left" className="px-2">
					<nav className="flex flex-col gap-y-2 pt-6">
						{routes.map((route, index) => {
							return (
								<Button
									variant={route.href === pathname ? 'secondary' : 'ghost'}
									size="sm"
									onClick={() => onClick(route.href)}
									className="w-full justify-start"
									key={index}
								>
									{route.label}
								</Button>
							);
						})}
					</nav>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto ">
			{routes.map((route) => {
				return (
					<NavButton
						key={route.href}
						href={route.href}
						label={route.label}
						isActive={pathname === route.href}
					/>
				);
			})}
		</nav>
	);
};
