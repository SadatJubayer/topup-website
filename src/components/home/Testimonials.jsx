import QuoteIcon from 'components/assets/QuoteIcon';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { testimonials } from 'data/testimonials';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Testimonials = () => {
    return (
        <Container white>
            <SectionTitle title={testimonials.title} subtitle={testimonials.subtitle} />
            <StyledTestimonial>
                {testimonials.says.map((say) => {
                    return (
                        <div className='testimonial' key={say.id}>
                            <QuoteIcon />
                            <blockquote>{say.desc}</blockquote>
                            {say.desc2 && <blockquote>{say.desc2}</blockquote>}
                            <div className='about'>
                                <p className='author'>{say.author}</p>
                                <p className='designation'>{say.designation}</p>
                            </div>
                        </div>
                    );
                })}
            </StyledTestimonial>
        </Container>
    );
};

export default Testimonials;

const StyledTestimonial = styled.div`
    ${tw`my-8 md:my-16`}
    ${tw`grid gap-5 grid-rows-2 grid-cols-3`};

    .testimonial {
        ${tw`cursor-pointer background-color[#EFEFF0] p-5 text-grayColor`}
        ${tw`flex flex-col space-y-5`}
        blockquote {
            ${tw`text-11 md:text-14`}
        }
        .author {
            ${tw`text-11 md:text-15 font-bold`}
        }
        .designation {
            ${tw`text-11 md:text-14`}
        }
        svg path {
            ${tw`transition-all duration-150`}
        }
    }
    .testimonial:hover {
        svg path {
            fill: #fb9747;
        }
    }

    .testimonial:nth-child(2) {
        ${tw`row-span-2 `}
    }
    .testimonial:nth-child(2),
    .testimonial:nth-child(3),
    .testimonial:nth-child(4) {
        ${tw`background[#EEF3FE]`}
    }
`;
