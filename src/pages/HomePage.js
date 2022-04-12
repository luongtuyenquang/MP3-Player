import './HomePage.scss';
import Header from '../components/Header/Header';
import Line from '../components/Line/Line';
import Music from '../components/MusicPlayer/Music/Music';

function HomePage() {
    return (
        <section className='home'>
            <Header />
            <Line />
            <Music />
        </section>
    )
}

export default HomePage