import React from 'react';
import SectionTitle from 'components/SectionTitle';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import partners from 'data/partners';
SwiperCore.use([Navigation, Pagination]);

const Partners = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <div>
            <SectionTitle
                title='Our partner we work with'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle.'
            />
            <StyledContent>
                <div className='sliderContainer'>
                    <Swiper
                        autoplay={true}
                        spaceBetween={50}
                        slidesPerView={3}
                        centeredSlides
                        breakpoints={{
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            }
                        }}
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
                        }}>
                        {partners.map((partner) => (
                            <SwiperSlide key={partner.id}>
                                <div className='slideImage'>
                                    <Image
                                        alt={partner.image}
                                        src={`/icons/${partner.image}`}
                                        objectFit='contain'
                                        height={50}
                                        width={120}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='bottom'>
                    <button ref={navigationPrevRef}>
                        <Image
                            alt='left-arrow'
                            src='/icons/leftarrow.png'
                            height={100}
                            width={100}
                        />
                    </button>
                    <button ref={navigationNextRef}>
                        <Image
                            alt='right-arrow'
                            src='/icons/rightarrow.png'
                            height={100}
                            width={100}
                        />
                    </button>
                </div>
            </StyledContent>
        </div>
    );
};

export default Partners;

const StyledContent = styled.div`
    ${tw`mt-20 md:mt-32`}
    ${tw`flex relative bg-primary h-32 md:h-64`};
    .sliderContainer {
        ${tw`bg-white absolute h-28 md:h-48 w-full max-width[1170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-5 px-10 flex items-center justify-center md:mt-8`}
        filter: drop-shadow(0px 36px 41px rgba(0, 0, 0, 0.08));
        .swiper-slide {
            ${tw`flex justify-center`}
        }
        .slideImage {
            ${tw`h-10 md:h-16`}
            img {
                ${tw`opacity-40 hover:opacity-90`}
            }
        }
    }
    .bottom {
        ${tw`absolute bottom-6 md:bottom-16 flex w-full justify-center space-x-4 md:space-x-8 transform md:translate-y-1/2`}
        button {
            ${tw`h-5 w-5 md:(h-10 w-10)`}
        }
    }
`;
