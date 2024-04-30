import React from 'react';
import { Outlet } from 'react-router-dom';

import { css } from '@emotion/css';

import MainNav from '@common/components/MainNav';
import PageNav from '@common/components/PageNav';

const PageLayout: React.FC = () => {
	return (
		<div
			className="
					flex flex-col
					min-h-screen
					overflow-hidden
				"
		>
			<header
				className={css`
					display: flex;
					justify-content: center;
					width: 100%;
					height: 80px;
					background-color: g;
				`}
			>
				{/* main nav */}
				<div className="w-full max-w-screen-xl ">
					<MainNav />
				</div>
			</header>
			<main
				className={css`
					width: 100%;
					flex: 1;
				`}
			>
				<PageNav />
				<Outlet />
			</main>
			<footer
				className={css`
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 276px;
					background-color: black;
					color: white;
				`}
			>
				<div className="w-full max-w-screen-xl">
					<div
						className={css`
							width: 100%;
							height: 80px;
							border-bottom: 1px solid gray;
							margin-bottom: 20px;
						`}
					>
						㈜ 엠피코
					</div>
					<div
						className={css`
							display: flex;
							width: 100%;
							height: 100px;
							margin-bottom: 30px;
						`}
					>
						<div className="w-full max-w-2xl">
							<p>
								회사명 : ㈜ 엠피코 ㅣ 대표 : 김정희 ㅣ 사업자 등록번호 : 835-87-01139 <br />
								주소 : 경상남도 김해시 생림면 생림대로 491 <br />
								전화 : 055-345-8944ㅣ 팩스 : 055-345-8943ㅣ E-MAIL : mpco@m-pco.com
							</p>
							<br />
							<p>© COPYRIGHT 2024 ㈜ 엠피코, ALL RIGHTS RESERVED.</p>
						</div>
					</div>
					<div />
				</div>
			</footer>
		</div>
	);
};

export default PageLayout;
