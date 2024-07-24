import { Intro } from '@/components/intro';
import { Benefits } from '@/components/benefits';
import { Collaboration } from '@/components/collaboration';
import { Pricing } from '@/components/pricing';
import { Services } from '@/components/services';
import { Roadmap } from '@/components/roadmap';

export default function Home() {
	return (
		<div>
			<Intro />
			<Benefits />
			<Collaboration />
			<Services />
			<Pricing />
			<Roadmap />
		</div>
	);
}
