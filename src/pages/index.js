import 'twin.macro';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import Services from '../components/home/Services';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Services />
            <Partners />
        </Layout>
    );
}
