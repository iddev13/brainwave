import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
	return (
		<Link href={'/'} className='flex-1 lg:flex-initial'>
			<div className="flex items-center">
				<Image src="/assets/brainwave.svg" alt="Logo" width={120} height={40} />
			</div>
		</Link>
	);
};
