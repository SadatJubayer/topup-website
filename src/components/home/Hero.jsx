import React from 'react';
import Button from 'components/Button';
import Image from 'next/image';

import tw, { styled } from 'twin.macro';
import Container from 'components/Container';

const Hero = () => {
    return (
        <Container>
            <StyledHero>
                <div className='left'>
                    <h1>Find & Hire Expert Freelancers</h1>
                    <p>
                        Work with the best freelancer talent from around the world our secure
                        flexible and cost-effective platform.
                    </p>
                    <Button text='CONTACT US' />
                </div>
                <div className='right'>
                    <Image src='/hero@2x.png' alt='topUp' layout='fill' objectFit='contain' />
                </div>
            </StyledHero>
        </Container>
    );
};

export default Hero;

const StyledHero = styled.div`
    ${tw`flex flex-col md:(flex-row space-x-10) justify-between items-center py-5 md:py-10 text-textColor`};
    .left {
        ${tw`flex flex-col space-y-5 text-center items-center md:(text-left items-start) max-w-lg`}
        h1 {
            ${tw`text-40 md:text-58 font-bold leading-none`}
        }
        p {
            ${tw`text-15 md:text-17 leading-snug max-width[430px] font-medium pt-1 pb-5`}
        }
    }
    .right {
        ${tw`mt-5 md:pt-0 relative w-full height[283px] md:(width[600px] height[465px])`}
    }
`;
