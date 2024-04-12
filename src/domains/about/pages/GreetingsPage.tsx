import React from 'react';

import Banner from '@common/components/Banner';

const GreetingsPage = () => {
	return (
		<>
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
