import React from 'react';

import { css } from '@emotion/css';

const WhatWeDoCard = () => {
	return (
		<div
			className={css`
				width: 290px;
				height: 320px;
				margin: 0px 10px;
				padding: 15px;
				border-radius: 4px;
				border: 1px solid pink;
			`}
		>
			<div
				className={css`
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 200px;
					background-color: gray;
				`}
			>
				<img width={100} height={100} alt="ie" />
			</div>
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
