import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import TestimonialCard from 'components/TestimonialCard';
import { testimonials } from 'data/testimonials';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);
import tw, { styled } from 'twin.macro';

const Testimonials = () => {
    return (
        <Container white>
            <SectionTitle title={testimonials.title} subtitle={testimonials.subtitle} />
            <StyledTestimonial>
                {testimonials.says.map((say) => {
                    return <TestimonialCard key={say.id} testimonial={say} />;
                })}
            </StyledTestimonial>
            <StyledTestimonialSlider>
                <Swiper autoHeight autoplay={true} navigation spaceBetween={10} slidesPerView={1}>
                    {testimonials.says.map((item) => (
                        <SwiperSlide key={item.id} className='singleSlide'>
                            <TestimonialCard testimonial={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledTestimonialSlider>
        </Container>
    );
};

export default Testimonials;

const StyledTestimonial = styled.div`
    ${tw`my-8 md:my-16 hidden md:grid  gap-5 grid-rows-2 grid-cols-3`}
`;

const StyledTestimonialSlider = styled.div`
    ${tw`pb-8 md:hidden`}
    .singleSlide {
        ${tw`px-10`}
    }
    .swiper-button-prev,
    .swiper-button-next {
        ${tw`text-textColor border border-grayColor h-6 w-6 rounded-full p-1`}
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 12px;
    }
`;
