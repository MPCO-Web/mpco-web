import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFoundPage from '@common/pages/NotFoundPage';
import PageLayout from '@common/templates/page-templates/PageLayout';

import mainRoutes from './common/routes/Route';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					{mainRoutes.map((mainRoute) => {
						return (
							<Route path={mainRoute.path} element={mainRoute.component}>
								{mainRoute.children?.map((child, idx) => {
									return <Route index={idx === 0} path={child.path} element={child.component} />;
								})}
							</Route>
						);
					})}
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
