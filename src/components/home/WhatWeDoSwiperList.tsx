import React from 'react';

import { css } from '@emotion/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 스와이퍼 기본 스타일시트 임포트
import 'swiper/css';
import 'swiper/css/navigation';

import WhatWeDoCard from './WhatWeDoCard';

const WhatWeDoSwiperList = () => {
	return (
		<Swiper
			className={css`
				width: 1300px;
				height: 426px;
			`}
			slidesPerView={4} // 한 슬라이드에 보여줄 갯수
			navigation // 이동 화살표
			modules={[Navigation]} // 사용할 모듈 등록
		>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
			<SwiperSlide>
				<WhatWeDoCard />
			</SwiperSlide>
		</Swiper>
	);
};

export default WhatWeDoSwiperList;
