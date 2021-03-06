import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = ({ primary, white, children, ...props }) => {
    return (
        <StyledLayout white={white} isPrimary={primary} {...props}>
            <div className='content'>{children}</div>
        </StyledLayout>
    );
};

export default Container;

const StyledLayout = styled.div`
    ${(p) => (p.white ? tw`bg-white` : tw`background-color[#F4F4F4]`)}
    ${(p) => p.isPrimary && tw`bg-primary`}
    .content {
        ${tw`max-w-6xl px-3 md:px-5 mx-auto`}
    }
`;
