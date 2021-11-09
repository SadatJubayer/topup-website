import React from 'react';
import Button from '../components/Button';
import Image from 'next/image';

import tw, { styled } from 'twin.macro';

const Hero = () => {
    return (
        <StyledHero>
            <div className='left'>
                <h1>Find & Hire Expert Freelancers</h1>
                <p>
                    Work with the best freelancer talent from around the world our secure flexible
                    and cost-effective platform.
                </p>
                <Button text='CONTACT US' />
            </div>
            <div className='right'>
                <Image src='/hero@2x.png' layout='fill' objectFit='contain' />
            </div>
        </StyledHero>
    );
};

export default Hero;

const StyledHero = styled.div`
    ${tw`flex flex-col space-y-5 md:(flex-row space-y-0 space-x-5) justify-between items-center py-5 md:py-10 text-textColor`};
    .left {
        ${tw`flex flex-col space-y-5 text-center items-center md:(text-left items-start) max-w-md`}
        h1 {
            ${tw`text-4xl md:text-5xl font-bold`}
        }
        p {
            ${tw`text-sm`}
        }
    }
    .right {
        ${tw` relative w-full height[283px] md:(width[600px] height[465px])`}
    }
`;
