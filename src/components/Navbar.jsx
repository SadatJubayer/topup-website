import React from 'react';
import Link from 'next/link';
import Logo from '../assets/Logo';
import tw, { styled } from 'twin.macro';
import menuLinks from '../data/menuLinks';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
    return (
        <StyledNav>
            <Link href='/'>
                <div className='brand'>
                    <Image src='/logo@2x.png' layout='fill' objectFit='contain' />
                </div>
            </Link>
            <ul className='nav'>
                {menuLinks.map((link) => (
                    <li id={link.id}>
                        <Link href={link.url}>{link.label}</Link>
                    </li>
                ))}
                <li>
                    <Link href='/hire'>
                        <Button text='Hire us' />
                    </Link>
                </li>
            </ul>
            <div className='mobileNav'>
                <Image src='/menuIcon.png' height={30} width={30} />
            </div>
        </StyledNav>
    );
};

export default Navbar;

const StyledNav = styled.nav`
    ${tw`flex items-center justify-between py-5`};

    .brand {
        ${tw` block relative height[50px] width[120px] md:(height[80px] width[150px]) `}
    }
    .nav {
        ${tw` hidden md:flex text-textColor space-x-5 items-center text-sm`}
    }
    .mobileNav {
        ${tw`md:hidden`}
    }
`;
