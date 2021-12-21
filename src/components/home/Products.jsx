import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { products } from 'data/products';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);
import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <Container>
            <StyledContent>
                <SectionTitle
                    title='Our creative products'
                    subtitle='We are the largest, globally-distributed network of top business, design, and technology talent'
                />
                <Swiper
                    autoplay={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
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
                    {products.items.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className='product'>
                                <div className='cover'>
                                    <Image
                                        src={`/images/${product.image}`}
                                        width={370 * 2}
                                        height={212 * 2}
                                        alt={product.title}
                                    />
                                </div>
                                <div className='details'>
                                    <h5>{product.title}</h5>
                                    <p>{product.description}</p>
                                    <Link href={product.link} passHref>
                                        <a target='_blank'>Details</a>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledContent>
        </Container>
    );
};

export default Products;

const StyledContent = styled.div`
    ${tw`py-10 md:py-20 `}
    .sectionTitle {
        ${tw`mt-0`}
    }
    .product .details {
        ${tw`mt-5 text-center flex flex-col text-grayColor`}
        h5 {
            ${tw`text-15 md:text-20`}
        }
        p {
            ${tw`text-13 md:text-16 pt-2.5 pb-5 max-width[300px] mx-auto`}
        }
        a {
            ${tw`text-13 md:text-17 border border-grayColor w-min mx-auto px-6 md:px-8 py-1 rounded-full hover:bg-primary hover:text-white`}
        }
    }
`;
