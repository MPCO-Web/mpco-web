import React from 'react';
import { Outlet } from 'react-router-dom';

import { css } from '@emotion/css';

import MainNav from '@common/components/MainNav';

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
						ghfgh
					</div>
					<div
						className={css`
							display: flex;
							width: 100%;
							height: 100px;
						`}
					>
						<div className="w-full max-w-2xl">
							<p
								className={css`
									margin-bottom: 10px;
								`}
							>
								회사명 : 주식회사 대웅이티 ㅣ 대표 : 전희충 ㅣ 사업자 등록번호 : 333-88-01232 ㅣ
								주소 : 부산광역시 강서구 화전산단3로 90 ㅣ 전화 : 051-715-3435ㅣ 팩스 :
								051-715-3436ㅣ E-MAIL : dwet@dwet.kr
							</p>
							<p>© COPYRIGHT 2024 HYUNDAI MOTOR GROUP, ALL RIGHTS RESERVED.</p>
						</div>
					</div>
					<div />
				</div>
			</footer>
		</div>
	);
};

export default PageLayout;
