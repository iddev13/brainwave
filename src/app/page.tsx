import { Benefits } from '@/components/benefits';
import Collaboration from '@/components/collaboration';
import { Intro } from '@/components/intro';
import Services from '@/components/services';

export default function Home() {
	return (
		<div>
			<Intro />
			<Benefits />
			<Collaboration />
			<Services />
		</div>
	);
}
