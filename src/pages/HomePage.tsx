import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@mui/material';

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
				className="wd
				text-4xl
				text-center
				text-blue-500
				font-bold
"
			>
				Hello mpco
			</h1>
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>
		</div>
	);
};

export default HomePage;
