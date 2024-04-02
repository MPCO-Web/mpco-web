import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GreetingsPage from '@about/pages/GreetingsPage';
import HistoryPage from '@about/pages/HistoryPage';
import LocationPage from '@about/pages/LocationPage';
import OrganizationPage from '@about/pages/OrganizationPage';
import NotFoundPage from '@common/pages/NotFoundPage';
import PageLayout from '@common/templates/page-templates/PageLayout';
import HomePage from '@home/pages/HomePage';
import EquipmentsPage from '@research-area/pages/EquipmentsPage';
import LicensePage from '@research-area/pages/LicensePage';
import ProductsPage from '@work-area/pages/ProductsPage';
import WorkPage from '@work-area/pages/WorkPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about">
						<Route path="" element={<Navigate replace to="greetings" />} />
						<Route path="greetings" element={<GreetingsPage />} />
						<Route path="history" element={<HistoryPage />} />
						<Route path="organization" element={<OrganizationPage />} />
						<Route path="location" element={<LocationPage />} />
					</Route>
					<Route path="work-area">
						<Route path="" element={<Navigate replace to="work" />} />
						<Route path="work" element={<WorkPage />} />
						<Route path="products" element={<ProductsPage />} />
					</Route>
					<Route path="research-area">
						<Route path="" element={<Navigate replace to="license" />} />
						<Route path="license" element={<LicensePage />} />
						<Route path="equipments" element={<EquipmentsPage />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
