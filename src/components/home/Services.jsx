import React from 'react';
import Container from 'components/Container';
import tw, { styled } from 'twin.macro';
import SectionTitle from 'components/SectionTitle';
import services from 'data/services';
import Image from 'next/image';

const Services = () => {
    return (
        <Container id='services' white>
            <StyledContent>
                <SectionTitle title={services.title} subtitle={services.subtitle} />
                <div className='items'>
                    {services.items.map((item) => (
                        <div key={item.id} className='service'>
                            <Image alt={item.name} src={item.image} height={51} width={34} />
                            <h3>{item.name}</h3>
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>
            </StyledContent>
        </Container>
    );
};

export default Services;

const StyledContent = styled.div`
    ${tw`my-8 md:my-16`}
    .items {
        ${tw`grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 pb-10 `}
        .service {
            ${tw`flex flex-col space-y-2.5 items-center text-center text-textColor `}
            h2 {
                ${tw`mt-2.5`}
            }
            p {
                ${tw`text-xs max-width[300px] leading-6 letter-spacing[25] px-5 `}
            }
        }
    }
`;
