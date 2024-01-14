import React from 'react';
import { css } from 'twin.macro';

const HomePage = () => {
	// tailwindcss classes
	return (
		<div
			className={css`
				width: 100%;
				height: 100vh;
				background-color: red;
			`}
		>
			<h1
				className="
				text-4xl
				text-center
				text-blue-500
				font-bold
"
			>
				Hello mpco
			</h1>
		</div>
	);
};

export default HomePage;
