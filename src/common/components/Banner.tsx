import React from 'react';

import { css } from '@emotion/css';

import test from '@common/assets/images/test.jpg';

interface BannerProps {
	text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
	return (
		<section className="w-full">
			<div
				className={css`
					display: flex;
					width: 100%;
					height: 400px;
					justify-content: center;
					align-items: center;
					overflow: hidden;
				`}
			>
				<img width={4096} height={2160} src={test} alt="banner" />
				<div
					className={css`
						position: absolute;
						display: flex;
						justify-content: center;
						align-items: center;
						color: white;
					`}
				>
					<h1>{text}</h1>
				</div>
			</div>
		</section>
	);
};

export default Banner;
