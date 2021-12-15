import React from 'react';
import tw, { styled } from 'twin.macro';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <StyledTitle className='sectionTitle'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </StyledTitle>
    );
};

export default SectionTitle;

const StyledTitle = styled.div`
    ${tw`my-8 md:my-16 w-full flex flex-col space-y-3 items-center justify-center text-center text-grayColor`};
    h2 {
        ${tw`text-25 md:text-38 font-bold`}
    }
    p {
        ${tw`text-13 md:text-16 font-medium max-w-2xl leading-6 letter-spacing[25] px-2.5`}
    }
`;
