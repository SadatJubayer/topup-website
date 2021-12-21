import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { BsPlusLg } from 'react-icons/bs';

const Steps = ({ serial, title, subTitle, isExpanded }) => {
    const [expanded, setExpanded] = useState(() => isExpanded);
    return (
        <StyledStep>
            <div className='title' onClick={() => setExpanded((p) => !p)}>
                <span>{serial}</span>
                <h3>{title}</h3>
                <div className='icon'>
                    <BsPlusLg color={expanded ? '#FB9747' : '#3A3A3A'} />
                </div>
            </div>
            <StyledDescription isVisible={expanded}>{subTitle}</StyledDescription>
        </StyledStep>
    );
};

export default Steps;

const StyledDescription = styled.p`
    ${tw`text-16 text-grayColor font-normal line-height[28px]`}
    ${(p) => (p.isVisible ? tw`max-height[auto] py-5` : tw`max-height[0px] overflow-hidden`)}
    transition: all 0.3s ease-out;
`;

const StyledStep = styled.div`
    ${tw`flex flex-col text-grayColor`};
    .title {
        ${tw`flex justify-start items-center uppercase bg-lightGray cursor-pointer select-none`}
        span {
            ${tw`height[42px] width[40px] md:(height[66px] width[64px]) text-white  bg-secondary flex justify-center items-center text-14 md:text-18`}
        }
        h3 {
            ${tw`pl-5 text-14 md:text-18`}
        }
        .icon {
            ${tw`height[42px] width[40px] md:(height[66px] width[64px]) ml-auto flex justify-center items-center`}
            svg {
                ${tw`text-sm`}
            }
        }
    }
`;
