import React from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import workingSteps from 'data/workingSteps';
import Steps from 'components/Step';
import Container from 'components/Container';

const WorkingSteps = () => {
    const [activeIndex, setActiveIndex] = React.useState('1');

    const handleClick = (id) => {
        if (id === activeIndex) return setActiveIndex(null);
        setActiveIndex(id);
    };

    return (
        <Container white>
            <StyledSteps id='features'>
                <div className='left'>
                    <h2>{workingSteps.title}</h2>
                    <p className='subTitle'>{workingSteps.subTitle}</p>
                    <div className='steps'>
                        {workingSteps.steps.map((step) => (
                            <Steps
                                onClick={handleClick}
                                serial={step.id}
                                key={step.id}
                                id={step.id}
                                title={step.title}
                                subTitle={step.desc}
                                isExpanded={step.id === activeIndex}
                            />
                        ))}
                    </div>
                </div>
                <div className='right'>
                    <Image
                        src='/images/workingSteps.png'
                        alt='TopUp Working Steps'
                        height={574}
                        width={570}
                    />
                </div>
            </StyledSteps>
        </Container>
    );
};

export default WorkingSteps;

const StyledSteps = styled.div`
    ${tw`my-10 md:my-32 flex justify-between space-x-5 w-full`};
    .left {
        ${tw`flex-1 text-grayColor`}
        h2 {
            ${tw`text-25 md:text-38 font-bold text-center md:text-left`}
        }
        .subTitle {
            ${tw`text-13 md:text-16 font-medium max-w-2xl leading-6 letter-spacing[25] md:p-0 text-center md:text-left`}
        }
        .steps {
            ${tw`pt-5 space-y-2`}
        }
    }
    .right {
        ${tw`flex-1 hidden self-end md:flex`}
    }
`;
