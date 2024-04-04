import React from 'react';

import { css } from '@emotion/css';

const GreetingsPage = () => {
	return (
		<>
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
						<h1>MPCO에 방문해 주셔서 감사합니다.</h1>
					</div>
				</div>
			</section>
			<section className="w-full max-w-screen-xl mx-auto">
				<h3>엠피</h3>
			</section>
		</>
	);
};

export default GreetingsPage;
