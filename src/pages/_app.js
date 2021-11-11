import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
