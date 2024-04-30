import React from 'react';

import GreetingsPage from '@about/pages/GreetingsPage';
import HistoryPage from '@about/pages/HistoryPage';
import LocationPage from '@about/pages/LocationPage';
import OrganizationPage from '@about/pages/OrganizationPage';
import HomePage from '@home/pages/HomePage';
import EquipmentsPage from '@research-area/pages/EquipmentsPage';
import LicensePage from '@research-area/pages/LicensePage';
import ProductsPage from '@work-area/pages/ProductsPage';
import WorkPage from '@work-area/pages/WorkPage';

interface IRoute {
	path: string;
	index?: boolean;
	displayName: string; // 페이지 제목
	shortDisplayName?: string; // 네비게이션 메뉴에 표시될 짧은 이름
	icon?: React.FC<{ color?: string; size?: number }>;
	children?: IRoute[];
	component?: React.ReactNode;
}

const mainRoutes: IRoute[] = [
	{
		path: 'home',
		index: true,
		displayName: 'Home',
		shortDisplayName: '홈',
		component: <HomePage />,
	},
	{
		path: 'about',
		displayName: 'About',
		shortDisplayName: '회사소개',
		children: [
			{
				path: 'greetings',
				index: true,
				displayName: 'Greetings',
				shortDisplayName: '인사말',
				component: <GreetingsPage />,
			},
			{
				path: 'history',
				displayName: 'History',
				shortDisplayName: '연혁',
				component: <HistoryPage />,
			},
			{
				path: 'organization',
				displayName: 'Organization',
				shortDisplayName: '조직도',
				component: <OrganizationPage />,
			},
			{
				path: 'location',
				displayName: 'Location',
				shortDisplayName: '오시는 길',
				component: <LocationPage />,
			},
		],
	},
	{
		path: 'work-area',
		displayName: 'Work Area',
		shortDisplayName: '사업분야',
		children: [
			{
				path: 'work',
				index: true,
				displayName: 'Work',
				shortDisplayName: '사업소개',
				component: <WorkPage />,
			},
			{
				path: 'products',
				displayName: 'Products',
				shortDisplayName: '생산제품',
				component: <ProductsPage />,
			},
		],
	},
	{
		path: 'research-area',
		displayName: 'Research Area',
		shortDisplayName: '연구분야',
		children: [
			{
				path: 'license',
				index: true,
				displayName: 'License',
				shortDisplayName: '인증서',
				component: <LicensePage />,
			},
			{
				path: 'equipments',
				displayName: 'Equipments',
				shortDisplayName: '설비',
				component: <EquipmentsPage />,
			},
		],
	},
];

export default mainRoutes;
