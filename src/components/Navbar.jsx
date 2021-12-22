import React, { useState } from 'react';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import menuLinks from 'data/menuLinks';
import Image from 'next/image';
import Button from 'components/Button';
import Container from 'components/Container';
import { AnimatePresence, motion } from 'framer-motion';
import MenuIcon from './assets/MenuIcon';

const variants = {
    show: {
        opacity: 1,
        height: 'auto',
        transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    },
    hide: {
        opacity: 0,
        height: 0,
        transition: { staggerChildren: 0.08, staggerDirection: -1, when: 'afterChildren' }
    }
};
const item = {
    hide: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    }
};

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((p) => !p);
    };

    return (
        <Container>
            <StyledNav>
                <div className='brandContainer'>
                    <Link href='/' passHref>
                        <a className='brand'>
                            <Image
                                alt='bPay-brand'
                                src='/bpay.png'
                                layout='fill'
                                objectFit='contain'
                            />
                        </a>
                    </Link>
                </div>
                <ul className='nav'>
                    {menuLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={link.url}>{link.label}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href='/#contact' passHref>
                            <a>
                                <Button text='Hire us' />
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className='mobileNav'>
                    <div className='menu-icon' onClick={toggleMenu}>
                        <MenuIcon />
                    </div>
                    <AnimatePresence>
                        {showMenu && (
                            <motion.ul
                                className='mobile-menu'
                                variants={variants}
                                initial='hide'
                                animate={showMenu ? 'show' : 'hide'}
                                exit='hide'>
                                {menuLinks.map((link) => (
                                    <motion.li
                                        key={link.id}
                                        whileTap={{ scale: 0.95 }}
                                        variants={item}>
                                        <Link href={link.url}>{link.label}</Link>
                                    </motion.li>
                                ))}
                                <motion.li variants={item} className='hireButton'>
                                    <Link href='/#contact' passHref>
                                        <a>
                                            <Button text='Hire us' />
                                        </a>
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </StyledNav>
        </Container>
    );
};

export default Navbar;

const StyledNav = styled.nav`
    ${tw`flex items-center py-5 justify-between `};
    img {
        ${tw`cursor-pointer`}
    }
    .brandContainer {
        ${tw`mx-auto md:ml-0`}
    }
    .brand {
        ${tw` cursor-pointer block relative height[70px] width[140px] md:(height[73px] width[144px]) `}
    }
    .nav {
        ${tw` hidden md:flex text-textColor space-x-5 items-center`}
        a {
            ${tw`hover:text-primary text-17`}
        }
    }
    .mobileNav {
        ${tw`md:hidden relative justify-self-end`}
        .menu-icon {
            svg {
                g {
                    ${tw`text-primary hover:text-secondary`}
                }
            }
        }
        .mobile-menu {
            ${tw`absolute right-0 top-full mt-1 width[210px] bg-white shadow-lg px-5 py-4 grid gap-1 grid-cols-2 rounded-lg`}
            .hireButton {
                a {
                    ${tw`border-0 hover:(bg-white) `}
                }
            }
            li {
                ${tw`list-none my-2.5`}
                a {
                    ${tw`hover:(bg-primary text-white) text-textColor border px-2 py-1 rounded-md text-14 overflow-hidden`}
                }
            }
            li:last-child {
                ${tw`col-span-2 justify-self-center`}
            }
        }
    }
`;
