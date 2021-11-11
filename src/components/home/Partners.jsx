import React from 'react';
import SectionTitle from '../SectionTitle';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

const Partners = () => {
    return (
        <div>
            <SectionTitle
                title='Our partner we work with'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives.'
            />
            <StyledContent>
                <div className='sliderContainer'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <Image src={`/icons/intelligent.png`} height={51} width={34} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={`/icons/intelligent.png`} height={51} width={34} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={`/icons/intelligent.png`} height={51} width={34} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={`/icons/intelligent.png`} height={51} width={34} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={`/icons/intelligent.png`} height={51} width={34} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </StyledContent>
        </div>
    );
};

export default Partners;

const StyledContent = styled.div`
    ${tw`flex relative background-color[#FB9747] h-64 mt-24  `};
    .sliderContainer {
        ${tw`bg-white absolute h-32 -top-16 w-full max-width[1170px] left-1/2 transform -translate-x-1/2  p-5 px-10 shadow-md border flex items-center justify-center `}
    }
`;
