

export const navigation = [
	{
		id: '0',
		title: 'Features',
		url: '#features',
	},
	{
		id: '1',
		title: 'Pricing',
		url: '#pricing',
	},
	{
		id: '2',
		title: 'How to use',
		url: '#how-to-use',
	},
	{
		id: '3',
		title: 'Roadmap',
		url: '#roadmap',
	},
	{
		id: '4',
		title: 'New account',
		url: '#signup',
		onlyMobile: true,
	},
	{
		id: '5',
		title: 'Sign in',
		url: '#login',
		onlyMobile: true,
	},
];

export const heroIcons: string[] = [
	'assets/home-smile.svg',
	'assets/file-02.svg',
	'assets/search-md.svg',
	'assets/plus-square.svg',
];

export const notificationImages: string[] = [
	'/assets/notification/image-4.png',
	'/assets/notification/image-3.png',
	'/assets/notification/image-2.png',
];

export const companyLogos: string[] = [
	'/assets/yourlogo.svg',
	'/assets/yourlogo.svg',
	'/assets/yourlogo.svg',
	'/assets/yourlogo.svg',
	'/assets/yourlogo.svg',
];

export const brainwaveServices: string[] = [
	'Photo generating',
	'Photo enhance',
	'Seamless Integration',
];

export const brainwaveServicesIcons: string[] = [
	'/assets/recording-03.svg',
	'/assets/recording-01.svg',
	'/assets/disc-02.svg',
	'/assets/chrome-cast.svg',
	'/assets/sliders-04.svg',
];

type roadmapType = {
	id: string;
	title: string;
	text: string;
	date: string;
	status: string;
	imageUrl: string;
	colorful?: true;
};

export const roadmap: roadmapType[] = [
	{
		id: '0',
		title: 'Voice recognition',
		text: 'Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.',
		date: 'May 2023',
		status: 'done',
		imageUrl: '/assets/roadmap/image-1.png',
		colorful: true,
	},
	{
		id: '1',
		title: 'Gamification',
		text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
		date: 'May 2023',
		status: 'progress',
		imageUrl: '/assets/roadmap/image-2.png',
	},
	{
		id: '2',
		title: 'Chatbot customization',
		text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
		date: 'May 2023',
		status: 'done',
		imageUrl: '/assets/roadmap/image-3.png',
	},
	{
		id: '3',
		title: 'Integration with APIs',
		text: 'Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.',
		date: 'May 2023',
		status: 'progress',
		imageUrl: '/assets/roadmap/image-4.png',
	},
];

export const collabText: string =
	"With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

type collabContentType = {
	id: string;
	title: string;
	text?: string;
};

export const collabContent:collabContentType[] = [
	{
		id: '0',
		title: 'Seamless Integration',
		text: collabText,
	},
	{
		id: '1',
		title: 'Smart Automation',
	},
	{
		id: '2',
		title: 'Top-notch Security',
	},
];

type collabAppsType = {
	id: string;
	title: string;
	icon: string;
	width: number;
	height: number;
};

export const collabApps: collabAppsType[] = [
	{
		id: '0',
		title: 'Figma',
		icon: '/assets/collaboration/figma.png',
		width: 26,
		height: 36,
	},
	{
		id: '1',
		title: 'Notion',
		icon: '/assets/collaboration/notion.png',
		width: 34,
		height: 36,
	},
	{
		id: '2',
		title: 'Discord',
		icon: '/assets/collaboration/discord.png',
		width: 36,
		height: 28,
	},
	{
		id: '3',
		title: 'Slack',
		icon: '/assets/collaboration/slack.png',
		width: 34,
		height: 35,
	},
	{
		id: '4',
		title: 'Photoshop',
		icon: '/assets/collaboration/photoshop.png',
		width: 34,
		height: 34,
	},
	{
		id: '5',
		title: 'Protopie',
		icon: '/assets/collaboration/protopie.png',
		width: 34,
		height: 34,
	},
	{
		id: '6',
		title: 'Framer',
		icon: '/assets/collaboration/framer.png',
		width: 26,
		height: 34,
	},
	{
		id: '7',
		title: 'Raindrop',
		icon: '/assets/collaboration/raindrop.png',
		width: 38,
		height: 32,
	},
];

type pricingType = {
	id: string;
	title: string;
	description: string;
	price: string | null;
	features: string[];
};

export const pricing: pricingType[] = [
	{
		id: '0',
		title: 'Basic',
		description: 'AI chatbot, personalized recommendations',
		price: '0',
		features: [
			'An AI chatbot that can understand your queries',
			'Personalized recommendations based on your preferences',
			'Ability to explore the app and its features without any cost',
		],
	},
	{
		id: '1',
		title: 'Premium',
		description: 'Advanced AI chatbot, priority support, analytics dashboard',
		price: '9.99',
		features: [
			'An advanced AI chatbot that can understand complex queries',
			'An analytics dashboard to track your conversations',
			'Priority support to solve issues quickly',
		],
	},
	{
		id: '2',
		title: 'Enterprise',
		description: 'Custom AI chatbot, advanced analytics, dedicated account',
		price: null,
		features: [
			'An AI chatbot that can understand your queries',
			'Personalized recommendations based on your preferences',
			'Ability to explore the app and its features without any cost',
		],
	},
];

type benefistType = {
	id: string;
	title: string;
	text: string;
	backgroundUrl: string;
	iconUrl: string;
	imageUrl: string;
	light?: boolean;
};

export const benefits: benefistType[] = [
	{
		id: '0',
		title: 'Ask anything',
		text: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
		backgroundUrl: '/assets/benefits/card-1.svg',
		iconUrl: '/assets/benefits/icon-1.svg',
		imageUrl: '/assets/benefits/image-2.png',
	},
	{
		id: '1',
		title: 'Improve everyday',
		text: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
		backgroundUrl: '/assets/benefits/card-2.svg',
		iconUrl: '/assets/benefits/icon-2.svg',
		imageUrl: '/assets/benefits/image-2.png',
		light: true,
	},
	{
		id: '2',
		title: 'Connect everywhere',
		text: 'Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.',
		backgroundUrl: '/assets/benefits/card-3.svg',
		iconUrl: '/assets/benefits/icon-3.svg',
		imageUrl: '/assets/benefits/image-2.png',
	},
	{
		id: '3',
		title: 'Fast responding',
		text: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
		backgroundUrl: '/assets/benefits/card-4.svg',
		iconUrl: '/assets/benefits/icon-4.svg',
		imageUrl: '/assets/benefits/image-2.png',
		light: true,
	},
	{
		id: '4',
		title: 'Ask anything',
		text: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
		backgroundUrl: '/assets/benefits/card-5.svg',
		iconUrl: '/assets/benefits/icon-1.svg',
		imageUrl: '/assets/benefits/image-2.png',
	},
	{
		id: '5',
		title: 'Improve everyday',
		text: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
		backgroundUrl: '/assets/benefits/card-6.svg',
		iconUrl: '/assets/benefits/icon-2.svg',
		imageUrl: '/assets/benefits/image-2.png',
	},
];

type socialsType = {
	id: string;
	title: string;
	iconUrl: string;
	url: string;
};

export const socials: socialsType[] = [
	{
		id: '0',
		title: 'Discord',
		iconUrl: '/assets/socials/discord.svg',
		url: '#',
	},
	{
		id: '1',
		title: 'Twitter',
		iconUrl: '/assets/socials/twitter.svg',
		url: '#',
	},
	{
		id: '2',
		title: 'Instagram',
		iconUrl: '/assets/socials/instagram.svg',
		url: '#',
	},
	{
		id: '3',
		title: 'Telegram',
		iconUrl: '/assets/socials/telegram.svg',
		url: '#',
	},
	{
		id: '4',
		title: 'Facebook',
		iconUrl: '/assets/socials/facebook.svg',
		url: '#',
	},
];
