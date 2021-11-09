import React from 'react';
import Navbar from './Navbar';

import tw, { styled } from 'twin.macro';

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Navbar />
            <main>{children}</main>
        </StyledLayout>
    );
};

export default Layout;

const StyledLayout = styled.div`
    ${tw`max-w-6xl px-3 md:px-5 mx-auto`}
`;
