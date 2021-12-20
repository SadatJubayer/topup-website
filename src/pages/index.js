import 'twin.macro';
import Counters from 'components/home/Counters';
import Hero from 'components/home/Hero';
import Partners from 'components/home/Partners';
import Services from 'components/home/Services';
import TeamMembers from 'components/home/TeamMembers';
import WorkingSteps from 'components/home/WorkingSteps';
import Layout from 'components/Layout';
import Products from 'components/home/Products';
import Testimonials from 'components/home/Testimonials';
import UploadCV from 'components/home/UploadCV';
import ContactUS from 'components/home/ContactUS';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Services />
            <Partners />
            <WorkingSteps />
            <Counters />
            <Products />
            <TeamMembers />
            <Testimonials />
            <UploadCV />
            <ContactUS />
        </Layout>
    );
}
