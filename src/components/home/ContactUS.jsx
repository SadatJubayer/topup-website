import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import TextInput from 'components/TextInput';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { FiPhoneCall, FiSend, FiLink, FiMapPin } from 'react-icons/fi';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

const ContactUS = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Container white>
            <SectionTitle
                title='Get in touch with us'
                subtitle='We are the largest, globally-distributed network of top business, design, and technology talent, We are the largest,'
            />
            <StyledContactPage>
                <div className='left'>
                    <form>
                        <div tw='flex flex-col space-y-5 md:(flex-row space-y-0 space-x-5)'>
                            <TextInput
                                value={name}
                                setValue={setName}
                                name='name'
                                required
                                placeholder='Your name'
                            />
                            <TextInput
                                value={email}
                                setValue={setEmail}
                                name='email'
                                required
                                type='email'
                                placeholder='Your email address'
                            />
                        </div>
                        <TextInput
                            value={subject}
                            setValue={setSubject}
                            required
                            name='subject'
                            placeholder='Subject'
                        />
                        <TextArea
                            value={message}
                            required
                            setValue={setMessage}
                            name='name'
                            placeholder='Your name...'
                        />
                        <Button text='Send Message' />
                    </form>
                </div>
                <div className='right'>
                    <div className='contacts'>
                        <h4>Contact us</h4>
                        <div className='Address'>
                            <FiMapPin />
                            <div className='info'>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='Address'>
                            <FiPhoneCall />
                            <div className='info'>
                                <p>01685577855</p>
                            </div>
                        </div>
                        <div className='Address'>
                            <FiSend />
                            <div className='info'>
                                <p>info@itopup.co</p>
                                <p>help@itopup.co</p>
                            </div>
                        </div>
                        <div className='Address'>
                            <FiLink />
                            <div className='info'>
                                <p>www.itopup.co</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledContactPage>
        </Container>
    );
};

export default ContactUS;

const StyledContactPage = styled.div`
    ${tw`flex flex-col md:(flex-row) mb-12 md:mb-16 shadow-md rounded-md overflow-hidden`};
    .left {
        ${tw`w-full flex-1 p-5 md:p-10`}
        form {
            ${tw`flex flex-col space-y-5`}
            button {
                ${tw`w-64`}
            }
        }
    }
    .right {
        ${tw`bg-primary text-white flex flex-col justify-center items-center p-5 md:p-10`}
        .contacts {
            ${tw`flex flex-col space-y-5`}
            h4 {
                ${tw`text-17 font-medium `}
            }
        }
        .Address {
            ${tw`flex space-x-8 items-center`}
            svg {
                ${tw`text-3xl stroke-1`}
            }
            p {
                ${tw`text-15`}
            }
        }
    }
`;
