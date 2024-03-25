import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

import ServiceCard from '@components/ServiceCard';
import WhatWeDoCard from '@components/WhatWeDoCard';

const HomePage = () => {
	// tailwindcss classes

	return (
		<div>
			{/* main nav */}
			<nav
				className={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
					max-width: 940px;
					margin-left: auto;
					margin-right: auto;
					height: 60px;
				`}
			>
				<div>mpco</div>
				<div>
					<Button>버튼1</Button>
					<Button>버튼2</Button>
				</div>
			</nav>
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
						height: 580px;
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
							width: 940px;
						`}
					>
						<h2>what we do</h2>
						<h5>this is text</h5>
						<div
							className={css`
								display: flex;
								background-color: white;
							`}
						>
							<WhatWeDoCard />
							<WhatWeDoCard />
							<WhatWeDoCard />
						</div>
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
						background-color: blue;
					`}
				>
					<div
						className={css`
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
						`}
					>
						<h2>our services</h2>
						<h5>text</h5>
						<div
							className={css`
								display: flex;
								background-color: white;
							`}
						>
							<ServiceCard />
							<ServiceCard />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
