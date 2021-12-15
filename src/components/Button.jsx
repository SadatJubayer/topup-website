import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    ${tw`bg-primary text-12 md:text-16 font-medium text-white px-7 py-2.5 rounded-full transition-transform hover:-translate-y-0.5 active:-translate-y-1`};
`;
