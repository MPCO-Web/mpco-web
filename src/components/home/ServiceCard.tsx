import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

const ServiceCard = () => {
	return (
		<div
			className={css`
				width: 460px;
				height: 524px;
				margin: 0px 10px;
				padding: 15px;
				border: 1px solid pink;
			`}
		>
			<div
				className={css`
					width: 430px;
					height: 286px;
					background-color: gray;
				`}
			>
				<img alt="nope" />
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					height: 180px;
					padding: 20px 0px;
				`}
			>
				<h5
					className={css`
						margin-bottom: 20px;
					`}
				>
					services one
				</h5>
				<p>about one</p>
			</div>
			<div
				className={css`
					display: flex;
					justify-content: center;
				`}
			>
				<Button>learn more</Button>
			</div>
		</div>
	);
};

export default ServiceCard;
