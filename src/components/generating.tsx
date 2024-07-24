import Image from 'next/image';

type GeneratingType = {
	className: string;
};

export const Generating = ({ className }: GeneratingType) => {
	return (
		<div
			className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
				className || ''
			} text-base`}
		>
			<Image
				className="w-5 h-5 mr-4"
				src="/assets/loading.png"
				width={20}
				height={20}
				alt="Loading"
			/>
			AI is generating
		</div>
	);
};
