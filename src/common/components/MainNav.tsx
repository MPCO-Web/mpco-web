import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

interface ISubMenuItem {
	title: string;
	path: string;
}

interface MainNavMenuProps {
	title: string;
	path: string;
	subMenu: ISubMenuItem[];
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
			{openMenu && (
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
				<MainNavMenu title="home" path="/" subMenu={[]} />
				<MainNavMenu
					title="회사소개"
					path="about"
					subMenu={[
						{
							title: '인사말',
							path: 'greetings',
						},
						{
							title: '연혁',
							path: 'history',
						},
						{
							title: '조직도',
							path: 'organization',
						},
						{
							title: '오시는 길',
							path: 'location',
						},
					]}
				/>
				<MainNavMenu
					title="사업분야"
					path="work-area"
					subMenu={[
						{
							title: '사업소개',
							path: 'work',
						},
						{
							title: '생산제품',
							path: 'products',
						},
					]}
				/>
				<MainNavMenu
					title="연구분야"
					path="research-area"
					subMenu={[
						{
							title: '인증서',
							path: 'license',
						},
						{
							title: '설비',
							path: 'equipments',
						},
					]}
				/>
				{/*
				<MainNavButton
					title="게시판"
					path="board"
					subMenu={[
						{
							title: 'NEWS',
							path: 'sub1',
						},
						{
							title: '공지사항',
							path: 'sub2',
						},
					]}
				/>
				*/}
			</div>
		</nav>
	);
};

export default MainNav;
