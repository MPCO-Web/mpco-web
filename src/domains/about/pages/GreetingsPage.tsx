import React from 'react';

import { css } from '@emotion/css';
import Typography from '@mui/material/Typography';

import Banner from '@common/components/Banner';

const GreetingsPage = () => {
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
							인사말
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
							<li>인사말</li>
						</ol>
					</div>
				</div>
			</section>
			<Banner text="MPCO에 방문해 주셔서 감사합니다." />
			<section className="w-full max-w-screen-xl mx-auto">
				<h3>인사말</h3>
				<p>
					안녕하세요. MPCO는 미래의 세계를 위해 노력하는 기업입니다. 저희는 기술을 통해 사람들의
					삶을 더 편리하고 행복하게 만들기 위해 노력하고 있습니다. 미래에는 더 많은 사람들이 MPCO를
					통해 더 행복해지길 바랍니다.
				</p>
			</section>
		</>
	);
};

export default GreetingsPage;
