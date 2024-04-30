import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import mainRoutes from '@common/routes/Route';

const PageNav = () => {
	const { pathname } = useLocation();

	const pathNavStr = useMemo(() => {
		const pathArr = pathname.split('/');
		const result: string[] = [];
		mainRoutes.forEach((mainRoute) => {
			if (mainRoute.path === pathArr[1]) {
				result.push(mainRoute.shortDisplayName || mainRoute.displayName);
				if (mainRoute.children) {
					mainRoute.children.forEach((child) => {
						if (child.path === pathArr[2]) {
							result.push(child.shortDisplayName || child.displayName);
						}
					});
				}
			}
		});
		return result;
	}, [pathname]);

	return <p>{pathNavStr}</p>;
};

export default PageNav;
