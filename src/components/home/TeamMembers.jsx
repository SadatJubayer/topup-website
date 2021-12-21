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
    const [active, setActiveSlide] = React.useState(teamMembers[0]);

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
                            src={`/images/team/${active.image}`}
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
                        <div className='info'>
                            <h3>{active.name}</h3>
                            <h4>{active.designation}</h4>
                            <p>{active.says}</p>
                        </div>
                        <div className='arrows'>
                            <button ref={navigationPrevRef}>
                                <Image
                                    src='/icons/left-dark.png'
                                    alt='prev'
                                    height={42}
                                    width={42}
                                />
                            </button>
                            <button ref={navigationNextRef}>
                                <Image
                                    src='/icons/right-dark.png'
                                    alt='prev'
                                    height={42}
                                    width={42}
                                />
                            </button>
                        </div>

                        <Swiper
                            autoplay={true}
                            slidesPerView={3}
                            spaceBetweenSlides={10}
                            loop
                            breakpoints={{
                                767: {
                                    slidesPerView: 4
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
                                const active = swiper.slides[swiper.activeIndex];
                                const member = teamMembers.find(
                                    (member) => member.id === active.id
                                );
                                setActiveSlide(member);
                            }}>
                            {teamMembers.map((member) => (
                                <SwiperSlide
                                    virtualIndex={member.id}
                                    itemID={member.id}
                                    id={member.id}
                                    key={member.id}>
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
        ${tw`flex justify-center space-x-5`}
        .active-member {
            ${tw`flex-1 w-44 md:w-96 md:min-height[250px] relative mt-auto`}
            img {
                ${tw`rounded-lg`}
            }
            .icon {
                ${tw`absolute bottom-0 left-1/2 transform  -translate-x-1/2 translate-y-1/3 md:translate-y-1/2`}
                ${tw`height[30px] width[30px] md:(height[70px] width[70px])`}
            }
        }

        .sliders {
            ${tw`flex-1 flex flex-col justify-between`}
            .info {
                ${tw`text-textColor p-5 pl-0`}
                h3 {
                    ${tw`text-16 md:text-25 font-semibold`}
                }
                h4 {
                    ${tw`text-11 md:text-14 color[#4C5157]`}
                }
                p {
                    ${tw`text-11 md:text-16 max-w-lg mt-2.5 color[#4C5157] hidden md:block`}
                }
            }

            .arrows {
                ${tw`hidden md:flex self-end mt-auto pr-5 pb-5 space-x-5`}
                button {
                    ${tw`h-8 w-8`}
                }
            }

            .teamMember {
                ${tw`w-16 md:w-32 rounded-md md:rounded-lg overflow-hidden`}
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
