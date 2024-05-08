import React from 'react';

import { css } from '@emotion/css';
import Typography from '@mui/material/Typography';

import Banner from '@common/components/Banner';

const HistoryPage = () => {
	return (
		<>
			<section className="page-title-content max-w-screen-xl mx-auto">
				<div
					className={css`
						padding: 80px 0 0;
					`}
				>
					<div>
						<Typography variant="h3" fontWeight={700}>
							연혁
						</Typography>
					</div>
				</div>
				<div
					className={css`
						padding: 20px 0;
						.breadcrumb {
							list-style: none;
							display: flex;
							padding: 0;
							margin: 0;
						}
						.breadcrumb li {
							position: relative;
							padding-right: 20px;
							margin-right: 10px;
						}
						.breadcrumb li:not(:last-child)::after {
							content: '>';
							position: absolute;
							right: 5px;
						}
					`}
				>
					<div>
						<ol className="breadcrumb location-list">
							<li>홈</li>
							<li>회사소개</li>
							<li>연혁</li>
						</ol>
					</div>
				</div>
			</section>
			<Banner text="MPCO에 방문해 주셔서 감사합니다." />
			<section className="w-full max-w-screen-xl mx-auto">
				<h3>연혁</h3>
			</section>
		</>
	);
};

export default HistoryPage;
