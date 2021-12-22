import React from 'react';
import Container from '../Container';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { counterData } from 'data/counters';

export const SingleCount = ({ count, title }) => {
    return (
        <StyledCount>
            <h4>{count}</h4>
            <p>{title}</p>
        </StyledCount>
    );
};

const Counters = () => {
    return (
        <Container white>
            <StyledContent>
                <div className='left'>
                    <div className='imageContainer'>
                        <Image src='/images/we-lead.png' alt='we-lead' height={1012} width={1130} />
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        <h2>{counterData.title}</h2>
                        <p className='subTitle'>{counterData.subTitle}</p>
                        {counterData.bodies.map((text, idx) => (
                            <p className='body' key={idx}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className='counters'>
                        {counterData.counters.map((item, idx) => (
                            <SingleCount key={idx} count={item.count} title={item.title} />
                        ))}
                    </div>
                </div>
            </StyledContent>
        </Container>
    );
};

export default Counters;

const StyledContent = styled.div`
    ${tw`flex flex-col space-y-5 md:(flex-row space-x-0 space-y-0) justify-between mb-8 md:mb-16`};
    .imageContainer {
        ${tw`p-5 md:p-10 height[247px] width[276px] md:(height[506px] width[565px])`}
    }
    .right {
        ${tw`text-grayColor`}
        .top h2 {
            ${tw`text-25 md:text-38 font-bold mb-2`}
        }
        .subTitle {
            ${tw`text-13 md:text-16 font-medium max-w-xl`}
        }
        .body {
            ${tw`text-15 md:text-16 py-4 md:py-5`}
        }
        .counters {
            ${tw`mt-5 flex flex-col space-x-0 space-y-8 md:(flex-row space-y-0 space-x-8) items-center text-center md:text-left`}
        }
    }
`;

const StyledCount = styled.div`
    ${tw`flex flex-col space-y-1`};
    h4 {
        ${tw`text-3xl font-bold`}
    }
    p {
        ${tw`text-18`}
    }
`;
