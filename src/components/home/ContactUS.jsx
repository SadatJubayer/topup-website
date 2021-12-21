import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import TextInput from 'components/TextInput';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { FiPhoneCall, FiSend, FiLink, FiMapPin } from 'react-icons/fi';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import { contactUs } from 'data/contactUs';

const ContactUS = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Container white id='contact'>
            <SectionTitle title={contactUs.title} subtitle={contactUs.subtitle} />
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
                                <p>{contactUs.addressLine1}</p>
                                <p>{contactUs.addressLine2}</p>
                            </div>
                        </div>
                        <div className='Address'>
                            <FiPhoneCall />
                            <div className='info'>
                                <p>
                                    <a href={`tel:${contactUs.phone1}`} rel='noreferrer'>
                                        {contactUs.phone1}
                                    </a>
                                </p>
                                <p>
                                    <a href={`tel:${contactUs.phone2}`} rel='noreferrer'>
                                        {contactUs.phone2}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='Address'>
                            <FiSend />
                            <div className='info'>
                                <p>
                                    <a href={`mailto:${contactUs.mail1}`} rel='noreferrer'>
                                        {contactUs.mail1}
                                    </a>
                                </p>
                                <p>
                                    <a href={`mailto:${contactUs.mail2}`} rel='noreferrer'>
                                        {contactUs.mail2}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='Address'>
                            <FiLink />
                            <div className='info'>
                                <p>
                                    <a
                                        href={`https://${contactUs.website}`}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {contactUs.website}
                                    </a>
                                </p>
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
        ${tw`flex-1 p-5 md:p-10`}
        form {
            ${tw`flex flex-col space-y-5`}
            button {
                ${tw`self-center md:self-start uppercase`}
            }
        }
    }
    .right {
        ${tw`bg-primary text-white flex flex-col justify-center items-center p-5 py-8 md:p-10`}
        .contacts {
            ${tw`flex flex-col space-y-5`}
            h4 {
                ${tw`text-17 font-medium uppercase md:mb-3`}
            }
        }
        .Address {
            ${tw`flex space-x-8 items-center `}
            svg {
                ${tw`text-3xl stroke-width[1.5]`}
            }
            p {
                ${tw`text-15`}
            }
        }
    }
`;
