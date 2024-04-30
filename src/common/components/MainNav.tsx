import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

import mainRoutes from '@common/routes/Route';

interface ISubMenuItem {
	title: string;
	path: string;
}

interface MainNavMenuProps {
	title: string;
	path: string;
	subMenu: ISubMenuItem[] | undefined;
}

const MainNavMenu: React.FC<MainNavMenuProps> = ({ title, path, subMenu }) => {
	const navigate = useNavigate();
	const [openMenu, setOpenMenu] = useState(false);

	const handleLeaveMainNav = () => {
		setOpenMenu(false);
	};

	const handleEnterMainMenuButton = () => {
		setOpenMenu(true);
	};

	const handleClickMainMenuButton = () => {
		setOpenMenu(false);
		navigate(path);
	};

	const handleClickSubMenuButton = (subPath: string) => {
		setOpenMenu(false);
		navigate(`${path}/${subPath}`);
	};

	return (
		<div
			onMouseLeave={handleLeaveMainNav}
			className={css`
				position: relative;
				height: 60px;
			`}
		>
			<Button
				onMouseEnter={handleEnterMainMenuButton}
				onClick={handleClickMainMenuButton}
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				{title}
			</Button>
			{subMenu && openMenu && (
				<div
					className={css`
						position: absolute;
						top: 60px;
						left: 0;
						width: 100px;
						background-color: white;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						z-index: 100;
					`}
				>
					{subMenu.map((item) => (
						<Button
							onClick={() => {
								handleClickSubMenuButton(item.path);
							}}
						>
							{item.title}
						</Button>
					))}
				</div>
			)}
		</div>
	);
};

const MainNav = () => {
	return (
		<nav
			className={css`
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-left: auto;
				margin-right: auto;
				height: 60px;
			`}
		>
			<div>mpco</div>
			<div
				className={css`
					display: flex;
					align-items: center;
				`}
			>
				{mainRoutes.map((route) => (
					<MainNavMenu
						key={route.path}
						title={route.shortDisplayName || route.displayName}
						path={route.path}
						subMenu={route.children?.map((child) => {
							return {
								title: child.shortDisplayName || child.displayName,
								path: child.path,
							};
						})}
					/>
				))}
			</div>
		</nav>
	);
};

export default MainNav;
