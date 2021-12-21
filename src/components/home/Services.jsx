import React from 'react';
import Container from 'components/Container';
import tw, { styled } from 'twin.macro';
import SectionTitle from 'components/SectionTitle';
import services from 'data/services';
import ServiceCard from 'components/ServiceCard';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);

const Services = () => {
    return (
        <Container id='services' white>
            <StyledContent>
                <SectionTitle title={services.title} subtitle={services.subtitle} />
                <div className='items'>
                    {services.items.map((item) => (
                        <ServiceCard key={item.id} service={item} />
                    ))}
                </div>
                <div className='slider'>
                    <Swiper autoplay={true} navigation spaceBetween={10} slidesPerView={1}>
                        {services.items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ServiceCard service={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </StyledContent>
        </Container>
    );
};

export default Services;

const StyledContent = styled.div`
    ${tw`my-8 md:my-16`}
    .items {
        ${tw`hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 pb-10`}
    }
    .slider {
        ${tw`py-2.5 md:hidden`}
        .swiper-button-prev,
        .swiper-button-next {
            ${tw`text-textColor px-2`}
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
            font-size: 20px;
        }
    }
`;
