import React from 'react';
import tw, { styled } from 'twin.macro';
import { BsPlusLg } from 'react-icons/bs';

const Steps = ({ serial, title, subTitle, isExpanded }) => {
    return (
        <StyledStep>
            <div className='title'>
                <span>{serial}</span>
                <h3>{title}</h3>
                <BsPlusLg />
            </div>
            <p>{subTitle}</p>
        </StyledStep>
    );
};

export default Steps;

const StyledStep = styled.div`
    ${tw`flex flex-col`};
    .title {
        ${tw`flex justify-start space-x-2.5 items-center uppercase`}
        span {
            ${tw`w-10 h-10 text-white  bg-secondary flex justify-center items-center`}
        }
    }
`;
