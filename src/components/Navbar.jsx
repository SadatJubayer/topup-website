import React from 'react';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import menuLinks from '../data/menuLinks';
import Image from 'next/image';
import Button from './Button';
import Container from './Container';

const Navbar = () => {
    return (
        <Container>
            <StyledNav>
                <Link href='/' passHref>
                    <a className='brand'>
                        <Image
                            alt='topUp-brand'
                            src='/logo@2x.png'
                            layout='fill'
                            objectFit='contain'
                        />
                    </a>
                </Link>
                <ul className='nav'>
                    {menuLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={link.url}>{link.label}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href='/hire' passHref>
                            <a>
                                <Button text='Hire us' />
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className='mobileNav'>
                    <Image alt='menu' src='/menuIcon.png' height={30} width={30} />
                </div>
            </StyledNav>
        </Container>
    );
};

export default Navbar;

const StyledNav = styled.nav`
    ${tw`flex items-center justify-between py-5`};

    .brand {
        ${tw` cursor-pointer block relative height[50px] width[120px] md:(height[80px] width[150px]) `}
    }
    .nav {
        ${tw` hidden md:flex text-textColor space-x-5 items-center`}
        a {
            ${tw`hover:text-primary text-17`}
        }
    }
    .mobileNav {
        ${tw`md:hidden`}
    }
`;
