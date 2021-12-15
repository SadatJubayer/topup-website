import React from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import Container from 'components/Container';

const UploadCV = () => {
    return (
        <StyledContent>
            <Image src='/images/upload-cv.png' alt='CV Upload' height={540} width={1920} />
            <Container>
                <div className='contents'>
                    <div className='upload'>
                        <div className='texts'>
                            <h2>We are HIRING CREATIVE people</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing is the in the ah
                                and typesetting industry. Lorem Ipsum has been the industry&apos;s
                                standard dummy text ever since the name of god Lorem Ipsum is simply
                                dummy text of the printing is the and for this typesetting industry.
                                Lorem Ipsum is simply
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing is the and for this
                                typesetting industry. Lorem Ipsum is simply
                            </p>
                        </div>
                        <div className='uploadButton'>
                            <label htmlFor='uploadCV'>
                                <Image
                                    src='/images/upload.png'
                                    alt='upload cv'
                                    height={142}
                                    width={173}
                                />
                                UPLOAD YOUR CV
                            </label>
                            <input type='file' name='' id='uploadCV' />
                        </div>
                    </div>
                </div>
            </Container>
        </StyledContent>
    );
};

export default UploadCV;

const StyledContent = styled.div`
    ${tw`flex justify-center relative border`}
    .contents {
        ${tw`w-full max-w-6xl mx-auto`}
        ${tw`absolute left-1/2 top-1/2 transform -translate-x-1/2  -translate-y-1/2 border`}
        .upload {
            ${tw`flex justify-between space-x-16 text-white`}
        }
        .texts {
            ${tw`w-1/2`}
        }
        .uploadButton {
            ${tw`bg-white text-grayColor width[415px] height[326px] rounded-xl flex flex-col items-center justify-center text-center text-20`}
            input {
                ${tw`hidden`}
            }
        }
    }
`;
