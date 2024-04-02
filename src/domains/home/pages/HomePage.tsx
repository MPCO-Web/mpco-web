import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

import GallerySwiper from '@home/components/GallerySwiper';
import WhatWeDoSwiperList from '@home/components/WhatWeDoSwiperList';

const HomePage = () => {
	// tailwindcss classes

	return (
		<>
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
		</>
	);
};

export default HomePage;
