import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/css';

const DELAY_TIME_MS = 2 * 1000;
const UPDATE_INTERVAL_MS = 10;

const NotFoundPage = () => {
	const navigate = useNavigate();

	const [remains, setRemains] = useState(DELAY_TIME_MS);
	const count = useMemo(() => Math.ceil(remains / UPDATE_INTERVAL_MS), [remains]);

	useEffect(() => {
		let timer: ReturnType<typeof setInterval>;
		if (remains === 0) {
			navigate('/');
		}
		if (remains > 0) {
			timer = setInterval(() => {
				setRemains((prev) => prev - UPDATE_INTERVAL_MS);
			}, UPDATE_INTERVAL_MS);
		}
		return () => clearInterval(timer);
	}, [remains, navigate]);

	const progressWidth = ((DELAY_TIME_MS - remains) / DELAY_TIME_MS) * 100;

	return (
		<div>
			<h1>페이지를 찾을 수 없습니다.</h1>
			<h3>{Math.ceil((count * UPDATE_INTERVAL_MS) / 1000)}초 후 홈으로 이동합니다.</h3>
			<div
				className={css`
					width: 100%;
					background-color: #e0e0e0;
					height: 20px;
					border-radius: 10px;
				`}
			>
				<div
					className={css`
						width: ${progressWidth}%;
						background-color: grey;
						height: 100%;
						border-radius: 10px;
						transition: width 0.1s ease-linear;
					`}
				/>
			</div>
		</div>
	);
};

export default NotFoundPage;
