import React from 'react';
import Image from 'next/image';
import SectionTitle from 'components/SectionTitle';
import tw, { styled } from 'twin.macro';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { teamMembers } from 'data/teamMembers';
import Container from 'components/Container';

SwiperCore.use([Navigation, Pagination]);

const TeamMembers = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [active, setActiveSlide] = React.useState(1);

    const [swiper, setSwiper] = React.useState(null);
    console.log(swiper);

    const getSlideById = (id) => {
        return teamMembers.find((member) => parseInt(member.id) === id);
    };

    return (
        <StyledMembers>
            <SectionTitle
                title='Our Quality Team Members'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, We are the largest,'
            />
            <Container white>
                <div className='team'>
                    <div className='active-member'>
                        <Image
                            src={`/images/team/${getSlideById(active).image}`}
                            alt='member'
                            objectFit='cover'
                            height={236 * 3}
                            width={162 * 3}
                        />
                        <div className='icon'>
                            <Image
                                src='/icons/top-up.png'
                                alt='topUp'
                                objectFit='cover'
                                height={71}
                                width={71}
                            />
                        </div>
                    </div>
                    <div className='sliders'>
                        <div className='info'>Hello From Active</div>
                        <Swiper
                            onSwiper={setSwiper}
                            autoplay={true}
                            slidesPerView={3}
                            spaceBetweenSlides={10}
                            breakpoints={{
                                767: {
                                    slidesPerView: 4,
                                    spaceBetweenSlides: 20
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
                            }}
                            onSlideChange={(swiper) => {
                                console.log('slide change', swiper.activeIndex);
                                // setActiveSlide(swiper.activeIndex);
                            }}>
                            {teamMembers.map((member) => (
                                <SwiperSlide virtualIndex={member.id} key={member.id}>
                                    <div className='teamMember'>
                                        <Image
                                            src={`/images/team/${member.image}`}
                                            height={245}
                                            width={170}
                                            objectFit='cover'
                                            alt={member.name}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Container>
        </StyledMembers>
    );
};

export default TeamMembers;

const StyledMembers = styled.div`
    .team {
        ${tw`flex justify-center space-x-4 border border-green-500`}
        .active-member {
            ${tw`flex-1 w-44 md:w-96 min-height[250px] relative`}
            .icon {
                ${tw`absolute bottom-0`}
            }
        }
        .sliders {
            ${tw`flex-1 flex flex-col justify-between  border border-red-500`}
            .teamMember {
                ${tw`w-16 md:w-32 border border-red-400`}
            }
            .swiper-slide-active {
                ${tw`hidden`}
            }
            .swiper-wrapper {
                ${tw`flex-1 width[200px] md:width[600px] `}
            }
        }
    }
`;
