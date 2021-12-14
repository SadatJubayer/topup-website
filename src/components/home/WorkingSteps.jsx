import React from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import workingSteps from '../../data/workingSteps';
import Steps from '../Step';

const WorkingSteps = () => {
    return (
        <StyledSteps>
            <div className='left'>
                <h2>{workingSteps.title}</h2>
                <p className='subTitle'>{workingSteps.subTitle}</p>
                <div className='steps'>
                    {workingSteps.steps.map((step) => (
                        <Steps
                            serial={step.id}
                            key={step.id}
                            title={step.title}
                            subTitle={step.desc}
                            isExpanded={step.id === '1'}
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
    );
};

export default WorkingSteps;

const StyledSteps = styled.div`
    ${tw`my-10 flex justify-between space-x-5 w-full max-width[1170px] mx-auto`};
    .left {
        ${tw`flex-1`}
        h2 {
            ${tw` text-2xl md:text-3xl font-bold text-grayColor  text-center md:text-left`}
        }
        .subTitle {
            ${tw`font-medium text-gray-800 py-2.5 pr-2  text-center md:text-left`}
        }
        .steps {
            ${tw`py-5 space-y-2`}
        }
    }
    .right {
        ${tw`flex-1 hidden md:block`}
    }
`;
