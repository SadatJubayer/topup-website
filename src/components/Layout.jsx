import React from 'react';
import Navbar from 'components/Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import siteInfo from 'data/aboutSite';

const Layout = ({ children, ...customMeta }) => {
    const router = useRouter();

    const metaData = {
        title: siteInfo.name,
        description: siteInfo.description,
        image: siteInfo.coverImage,
        type: 'website',
        ...customMeta
    };
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    {metaData.title} - {metaData.description}
                </title>
                <meta name='robots' content='follow, index' />
                <meta content={metaData.description} name='description' />
                <meta property='og:url' content={`${siteInfo.domainName}${router.asPath}`} />
                <link rel='canonical' href={`${siteInfo.domainName}${router.asPath}`} />

                {/* Open Graph / Facebook */}
                <meta property='og:type' content={metaData.type} />
                <meta property='og:site_name' content={metaData.title} />
                <meta property='og:description' content={metaData.description} />
                <meta property='og:title' content={metaData.title} />
                <meta property='og:image' content={metaData.image} />

                {/* Twitter */}
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@bPayLimited' />
                <meta name='twitter:title' content={metaData.title} />
                <meta name='twitter:description' content={metaData.description} />
                <meta name='twitter:image' content={metaData.image} />
                {'date' in metaData && (
                    <meta property='article:published_time' content={metaData['date']} />
                )}
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
