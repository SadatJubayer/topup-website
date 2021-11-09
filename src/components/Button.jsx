import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    ${tw`bg-primary text-sm text-white px-4 py-2 rounded-full hover:bg-blue-500 `};
`;
