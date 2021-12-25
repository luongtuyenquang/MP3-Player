import './HomePage.scss';
import SearchBar from '../components/SearchBar/SeachBar';
import Line from '../components/Line/Line';

function HomePage() {
    return (
        <section className='home'>
            <SearchBar />
            <Line />
        </section>
    )
}

export default HomePage