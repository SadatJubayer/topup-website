import React from 'react';
import tw, { styled } from 'twin.macro';

const TextInput = ({ name, value, setValue, ...props }) => {
    return (
        <StyledInput>
            <input value={value} id={name} onChange={(e) => setValue(e.target.value)} {...props} />
        </StyledInput>
    );
};

export default TextInput;

const StyledInput = styled.div`
    ${tw`w-full`}
    input {
        ${tw`text-15 height[72px] border border-color[#DEDFE0] focus:border-gray-400 focus:outline-none w-full px-8 rounded-lg`}
    }
`;
