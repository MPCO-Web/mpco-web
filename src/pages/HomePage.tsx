import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

import MainNav from '@components/common/MainNav';
import GallerySwiper from '@components/home/GallerySwiper';
import WhatWeDoSwiperList from '@components/home/WhatWeDoSwiperList';

const HomePage = () => {
	// tailwindcss classes

	return (
		<>
			<header>
				{/* main nav */}
				<MainNav />
			</header>
			<main>
				{/* main banner */}
				<section>
					<div
						className={css`
							display: flex;
							width: 100%;
							height: 600px;
							justify-content: center;
							align-items: center;
							background-color: gray;
						`}
					>
						<div>
							<div>
								<h1>This is velocity</h1>
							</div>
							<div>
								<h3>A FREE RESPONSIVE TEMPLATE</h3>
							</div>
							<div
								className={css`
									display: flex;
								`}
							>
								<Button>Get Started</Button>
								<Button>Learn More</Button>
							</div>
						</div>
					</div>
				</section>
				{/* card section */}
				<section>
					<div
						className={css`
							display: flex;
							justify-content: center;
							align-items: center;
							width: 100%;
							height: 800px;
							background-color: orange;
							padding: 80px 10px;
						`}
					>
						<div
							className={css`
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column;
								width: 1400px;
								overflow: hidden;
							`}
						>
							<h2>what we do</h2>
							<h5>this is text</h5>
							<WhatWeDoSwiperList />
						</div>
					</div>
				</section>
				{/* service section */}
				<section>
					<div
						className={css`
							width: 100%;
							height: 820px;
							display: flex;
							justify-content: center;
							padding: 80px 10px;
						`}
					>
						<GallerySwiper />
					</div>
				</section>
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
				<div
					className={css`
						width: 960px;
						height: 100%;
						padding: 40px 0px;
					`}
				>
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
						<div
							className={css`
								width: 580px;
							`}
						>
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
		</>
	);
};

export default HomePage;
