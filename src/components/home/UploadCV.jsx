import React from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import UploadIcon from 'components/assets/UploadIcon';

const UploadCV = () => {
    return (
        <StyledContent>
            <div className='image-container'>
                <Image
                    src='/images/upload-cv.png'
                    alt='CV Upload'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
            <div className='contents'>
                <div className='upload'>
                    <div className='texts'>
                        <h2>
                            We are <span>hiring creative </span>people
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing is the in the ah and
                            typesetting industry. Lorem Ipsum has been the industry&apos;s standard
                            dummy text ever since the name of god
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing is the and for this
                            typesetting industry. Lorem Ipsum is simply
                        </p>
                    </div>
                    <div className='right'>
                        <div className='uploadButton'>
                            <label htmlFor='uploadCV'>
                                <div className='uploadIcon'>
                                    <UploadIcon />
                                </div>
                                <span>UPLOAD YOUR CV</span>
                            </label>
                            <input type='file' name='' id='uploadCV' />
                        </div>
                    </div>
                </div>
            </div>
        </StyledContent>
    );
};

export default UploadCV;

const StyledContent = styled.div`
    ${tw`md:(mt-24 mb-24) w-full relative height[700px] md:height[500px]`}
    .image-container {
        ${tw`h-full w-full`}
    }
    .contents {
        ${tw`w-full max-w-6xl mx-auto absolute left-0 pr-5`}
        ${tw`absolute left-1/2 top-1/2 transform -translate-x-1/2  -translate-y-1/2`}
        .upload {
            ${tw`flex flex-col space-x-0 space-y-10 justify-between  md:(flex-row space-x-5 space-y-0) text-white`}
        }
        .texts {
            /* ${tw`w-1/2`} */
            ${tw`text-center md:text-left max-width[550px] px-5 mx-auto`}
            h2 {
                ${tw`font-bold text-32 md:text-45 md:pr-10 leading-10 md:leading-tight`}
                span {
                    ${tw`uppercase`}
                }
            }
            p {
                ${tw`text-15 md:text-16 py-2.5`}
            }
        }
        .right {
            ${tw`w-full text-grayColor  rounded-xl flex items-center justify-center md:justify-end text-center text-20 `}
        }
        .uploadButton {
            ${tw` flex justify-center items-center`}
            input {
                ${tw`hidden`}
            }
            label {
                ${tw`bg-white flex flex-col items-center py-5 px-10 md:(px-16 py-10) space-y-5 text-11 md:text-20  rounded-xl cursor-pointer`}
                box-shadow: 25px 34px 27px rgba(0, 25, 93, 0.30);
                .uploadIcon {
                    ${tw`w-full`}
                    :hover {
                        path {
                            ${tw`fill-current fill[#48b4e7]`}
                        }
                    }
                }
            }
        }
    }
`;
