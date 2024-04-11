import React from 'react';

import { css } from '@emotion/css';

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
					background-color: gray;
				`}
			>
				<div>
					<h1>{text}</h1>
				</div>
			</div>
		</section>
	);
};

export default Banner;
