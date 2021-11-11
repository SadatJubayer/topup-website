import React from 'react';
import tw, { styled } from 'twin.macro';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <StyledTitle>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </StyledTitle>
    );
};

export default SectionTitle;

const StyledTitle = styled.div`
    ${tw`my-16 w-full flex flex-col space-y-3 items-center justify-center text-center text-grayColor`};
    h2 {
        ${tw` text-2xl md:text-3xl font-bold`}
    }
    p {
        ${tw`text-xs max-w-xl leading-6 letter-spacing[25] px-2.5`}
    }
`;
