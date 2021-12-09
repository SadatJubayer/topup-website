import React from 'react';
import SectionTitle from '../SectionTitle';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);

const Partners = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <div>
            <SectionTitle
                title='Our partner we work with'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives.'
            />
            <StyledContent>
                <div className='sliderContainer'>
                    <Swiper
                        autoplay={true}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current
                        }}
                        onBeforeInit={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }, 500);
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt='hello'
                                src={`/icons/intelligent.png`}
                                height={51}
                                width={34}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div tw='absolute bottom-5 flex w-full justify-center space-x-4'>
                    <button ref={navigationPrevRef}>
                        <Image alt='left-arrow' src='/icons/leftarrow.png' height={42} width={42} />
                    </button>
                    <button ref={navigationNextRef}>
                        <Image
                            alt='right-arrow'
                            src='/icons/rightarrow.png'
                            height={42}
                            width={42}
                        />
                    </button>
                </div>
            </StyledContent>
        </div>
    );
};

export default Partners;

const StyledContent = styled.div`
    ${tw`flex relative bg-secondary h-40 mt-24  `};
    .sliderContainer {
        ${tw`bg-white absolute h-32 -top-16 w-full max-width[1170px] left-1/2 transform -translate-x-1/2  p-5 px-10 shadow-md border flex items-center justify-center `}

        .swiper-slide {
            ${tw`flex justify-center`}
        }
    }
`;