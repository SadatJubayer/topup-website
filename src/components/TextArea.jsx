import React from 'react';
import tw, { styled } from 'twin.macro';

const TextArea = ({ name, value, setValue, ...props }) => {
    return (
        <StyledInput>
            <textarea
                value={value}
                id={name}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />
        </StyledInput>
    );
};

export default TextArea;

const StyledInput = styled.div`
    textarea {
        ${tw`text-15 height[262px] border border-color[#DEDFE0] focus:border-gray-400 focus:outline-none w-full px-8 rounded-lg pt-5`}
    }
`;
