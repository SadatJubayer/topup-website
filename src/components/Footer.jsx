import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { contactUs } from 'data/contactUs';
import menuLinks from 'data/menuLinks';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Container primary>
                <StyledFooter>
                    <div className='section'>
                        <Link href='/' passHref>
                            <a className='brand'>
                                <Image
                                    alt='topUp-brand'
                                    src='/b-pay-white.png'
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </a>
                        </Link>
                        <p>{contactUs.mail1}</p>
                        <p>{contactUs.phone1}</p>
                    </div>
                    <div className='section'>
                        <div className='title'>Services</div>
                        {contactUs.services.map((service, idx) => (
                            <p key={idx}>{service}</p>
                        ))}
                    </div>
                    <div className='section'>
                        <div className='title'>About us</div>
                        {menuLinks.map((link) => (
                            <Link href={link.url} key={link.id}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className='section'>
                        <div className='title'>Address</div>
                        <p>{contactUs.addressLine1}</p>
                        <p>{contactUs.addressLine2}</p>
                        <div className='social-links'>
                            <a
                                href={contactUs.socialLinks.instagram}
                                target='_blank'
                                rel='noreferrer'>
                                <FaInstagram />
                            </a>
                            <a
                                href={contactUs.socialLinks.youtube}
                                target='_blank'
                                rel='noreferrer'>
                                <FaYoutube />
                            </a>
                            <a
                                href={contactUs.socialLinks.facebook}
                                target='_blank'
                                rel='noreferrer'>
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </StyledFooter>
            </Container>
            <p tw='py-1.5 text-11 md:text-13 text-textColor text-center text-textColor'>
                © 2021 iTopUp. All Rights Reserved.
            </p>
        </>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    ${tw`text-white flex flex-col justify-center items-center text-center space-y-8 md:(flex-row justify-between) md:text-left text-16 py-14 md:py-28`};
    .title {
        ${tw`text-white text-18 mb-1 font-semibold`}
    }
    .brand {
        ${tw` cursor-pointer block mb-5 relative height[50px] width[120px] md:(height[80px] width[150px]) `}
    }
    a {
        ${tw`block py-1 hover:text-secondary`}
        svg {
            ${tw`text-primary`}
        }
        :hover {
            svg {
                ${tw`text-secondary`}
            }
        }
    }
    p {
        ${tw`py-1 hover:text-secondary`}
    }
    .social-links {
        ${tw`flex justify-center md:justify-start space-x-5 my-5`}
        a {
            ${tw`bg-white rounded-full h-10 w-10 flex justify-center items-center`}
        }
        svg {
            ${tw`text-2xl`}
        }
    }
`;
