import React, { useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from 'components/SectionTitle';
import tw, { styled } from 'twin.macro';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { teamMembers } from 'data/teamMembers';
import Container from 'components/Container';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const TeamMembers = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [active, setActiveSlide] = React.useState(null);

    useEffect(() => {
        setActiveSlide(teamMembers[0]);
    }, []);

    return (
        <StyledMembers id='team'>
            <SectionTitle
                title='Our Quality Team Members'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, We are the largest,'
            />
            <Container white>
                <div className='team'>
                    <div className='active-member'>
                        {active && (
                            <Image
                                src={`/images/team/${active.image}`}
                                alt='member'
                                objectFit='cover'
                                height={236 * 3}
                                width={162 * 3}
                            />
                        )}
                        <div className='icon'>
                            <Image
                                src='/icons/b-pay.png'
                                alt='bPay'
                                objectFit='cover'
                                height={71}
                                width={71}
                            />
                        </div>
                    </div>
                    <div className='sliders'>
                        <div className='info'>
                            <h3>{active?.name}</h3>
                            <h4>{active?.designation}</h4>
                            <p>{active?.says}</p>
                        </div>
                        <div className='arrows'>
                            <button ref={navigationPrevRef}>
                                <AiOutlineLeftCircle />
                            </button>
                            <button ref={navigationNextRef}>
                                <AiOutlineRightCircle />
                            </button>
                        </div>

                        <Swiper
                            slideToClickedSlide={true}
                            autoplay={{ delay: 2000 }}
                            slidesPerView={3}
                            loop
                            loopedSlides={teamMembers.length * 4}
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
                                    swiper.loopDestroy();
                                    swiper.loopCreate();
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
    ${tw` py-8 md:py-16`}
    .team {
        ${tw`flex justify-center space-x-2 md:space-x-5 md:mt-16`}
        .active-member {
            ${tw`flex-1 w-52 md:w-96 max-width[370px] md:min-height[250px] relative mt-auto`}
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
                ${tw`text-grayColor`}
                h3 {
                    ${tw`text-16 md:text-25 font-semibold`}
                }
                h4 {
                    ${tw`text-11 md:text-14 color[#4C5157] mt-1 md:mt-2`}
                }
                p {
                    ${tw`text-11 md:text-16 max-w-lg mt-2.5 md:mt-5 color[#4C5157] hidden md:block`}
                }
            }

            .arrows {
                ${tw`hidden md:flex self-end mt-auto pr-5 pb-5 space-x-5`}
                svg {
                    ${tw`text-xl md:text-3xl color[#dddddd] hover:text-primary`}
                }
            }

            .teamMember {
                ${tw`w-16 md:w-80 rounded-md md:rounded-lg overflow-hidden cursor-pointer`}
            }
            .swiper-slide-active {
                ${tw`hidden`}
            }
            .swiper-wrapper {
                ${tw`flex-1 width[200px] md:width[750px] `}
            }
        }
    }
`;
