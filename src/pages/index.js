import 'twin.macro';
import Counters from 'components/home/Counters';
import Hero from 'components/home/Hero';
import Partners from 'components/home/Partners';
import Services from 'components/home/Services';
import TeamMembers from 'components/home/TeamMembers';
import WorkingSteps from 'components/home/WorkingSteps';
import Layout from 'components/Layout';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Services />
            <Partners />
            <WorkingSteps />
            <Counters />
            <TeamMembers />
        </Layout>
    );
}
