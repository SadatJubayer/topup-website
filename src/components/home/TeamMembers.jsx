import React from 'react';
import Image from 'next/image';
import SectionTitle from 'components/SectionTitle';
import tw, { styled } from 'twin.macro';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { teamMembers } from 'data/teamMembers';
SwiperCore.use([Navigation, Pagination]);

const TeamMembers = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <StyledMembers>
            <SectionTitle
                title='Our Quality Team Members'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, We are the largest,'
            />
            <div className='team'>
                <Swiper
                    autoplay={true}
                    loop
                    spaceBetween={50}
                    slidesPerView={5}
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
                    onSlideChange={(swiper) => console.log('slide change', swiper.activeIndex)}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className='teamMember'>
                                <div className='picture'>
                                    <Image
                                        src={`/images/team/${member.image}`}
                                        height={2450}
                                        width={1700}
                                        alt={member.name}
                                    />
                                    <div className='icon'>
                                        <Image
                                            src='/icons/top-up.png'
                                            alt='topUp'
                                            height={71}
                                            width={71}
                                        />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h3>{member.name}</h3>
                                    <h3>{member.designation}</h3>
                                    <h3>{member.says}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </StyledMembers>
    );
};

export default TeamMembers;

const StyledMembers = styled.div`
    ${tw`my-10 max-width[1170px] mx-auto`};
    .swiper-wrapper {
        ${tw`flex items-end`}
    }
    .teamMember {
        ${tw`flex space-x-5 justify-start mb-16`}
        .info, .icon {
            ${tw`hidden`}
        }
        .picture {
            ${tw`height[245px] width[170px]`}
        }
    }
    .swiper-slide {
        /* margin-right: 10px !important; */
    }
    .swiper-slide-active {
        /* ${tw`border border-red-400 `} */
        width: 400px !important;
        height: 600px !important;
        .teamMember {
            ${tw`relative`}
        }
        .info {
            ${tw`flex flex-col space-y-1 absolute right-0 border top-0 transform translate-x-full`}
        }
        .picture {
            ${tw`height[542px] width[375px] relative`}
            .icon {
                ${tw`block absolute bottom-0 right-1/2 transform translate-x-1/2  translate-y-1/2`}
            }
        }
    }
`;
