import React from 'react';

import Banner from '../../components/Banner';

const GreetingsPage = () => {
	return (
		<>
			<Banner text="MPCO에 방문해 주셔서 감사합니다." />
			<section className="w-full max-w-screen-xl mx-auto">
				<h3>인사말</h3>
			</section>
		</>
	);
};

export default GreetingsPage;
