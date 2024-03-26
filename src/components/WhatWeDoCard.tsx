import React from 'react';

import { css } from '@emotion/css';

const WhatWeDoCard = () => {
	return (
		<div
			className={css`
				width: 320px;
				height: 426px;
				border-radius: 4px;
				border: 1px solid pink;
				overflow: hidden;
			`}
		>
			<img
				className={css`
					background-color: gray;
				`}
				width={320}
				height={240}
				alt="ie"
			/>
			<div
				className={css`
					display: flex;
					align-items: center;
					flex-direction: column;
				`}
			>
				<h3>title</h3>
				<p>description</p>
			</div>
		</div>
	);
};

export default WhatWeDoCard;
