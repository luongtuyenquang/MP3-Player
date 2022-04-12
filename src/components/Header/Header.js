import './Header.scss';
import SearchBar from '../SearchBar/SeachBar';
import DarkMode from '../DarkMode/DarkMode';

function Header() {
    return (
        <section className='header'>
            <SearchBar />
            <DarkMode />
        </section>
    )
}

export default Header