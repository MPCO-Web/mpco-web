import React from 'react';

import { css } from '@emotion/css';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 스와이퍼 기본 스타일시트 임포트
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GallerySwiper: React.FC = () => {
	return (
		<Swiper
			className={css`
				width: 1080px;
				height: 100%;
			`}
			centeredSlides // 가운데 정렬
			slidesPerView={1} // 한 슬라이드에 보여줄 갯수
			loop // 슬라이드 반복 여부
			autoplay={{ delay: 5000 }} // 자동 슬라이드 시간
			navigation // 이동 화살표
			pagination={{
				clickable: true,
			}} // 페이지네이션 사용
			modules={[Pagination, Navigation]} // 사용할 모듈 등록
		>
			<SwiperSlide>
				<div
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'red',
					}}
				>
					<h2>Slide 1</h2>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'blue',
					}}
				>
					<h2>Slide 2</h2>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'green',
					}}
				>
					<h2>Slide 3</h2>
				</div>
			</SwiperSlide>
			{/* 여기에 더 많은 SwiperSlide 컴포넌트를 추가할 수 있습니다 */}
		</Swiper>
	);
};

export default GallerySwiper;
