import './HomePage.scss';
import SearchBar from '../components/SearchBar/SeachBar';
import Line from '../components/Line/Line';
import Music from '../components/MusicPlayer/Music/Music';

function HomePage() {
    return (
        <section className='home'>
            <SearchBar />
            <Line />
            <Music />
        </section>
    )
}

export default HomePage