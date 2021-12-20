import React from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';

const ServiceCard = ({ service }) => {
    return (
        <StyledCard className='service'>
            <Image alt={service.name} src={service.image} height={51} width={34} />
            <h3>{service.name}</h3>
            <p>{service.details}</p>
        </StyledCard>
    );
};

export default ServiceCard;

const StyledCard = styled.div`
    ${tw`flex flex-col space-y-2.5 items-center text-center text-textColor `}
    h2 {
        ${tw`mt-2.5`}
    }
    p {
        ${tw`text-xs max-width[300px] leading-6 letter-spacing[25] px-5 `}
    }
`;
