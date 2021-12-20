import React from 'react';
import QuoteIcon from 'components/assets/QuoteIcon';
import tw, { styled } from 'twin.macro';

const TestimonialCard = ({ testimonial }) => {
    return (
        <StyledCard>
            <QuoteIcon />
            <blockquote>{testimonial.desc}</blockquote>
            {testimonial.desc2 && <blockquote>{testimonial.desc2}</blockquote>}
            <div className='about'>
                <p className='author'>{testimonial.author}</p>
                <p className='designation'>{testimonial.designation}</p>
            </div>
        </StyledCard>
    );
};

export default TestimonialCard;

const StyledCard = styled.div`
    ${tw`cursor-pointer bg-gray-50 p-5 text-grayColor`}
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
    :hover {
        svg path {
            fill: #fb9747;
        }
    }
    :nth-child(2) {
        ${tw`row-span-2 `}
    }
    :nth-child(2):hover,
    :nth-child(3):hover,
    :nth-child(4):hover {
        ${tw`background[#EEF3FE]`}
    }
    :nth-child(1):hover,
    :nth-child(5):hover {
        ${tw`background[#EFEFF0]`}
    }
`;
