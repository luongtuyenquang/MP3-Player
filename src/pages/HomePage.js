import './HomePage.scss';
import Header from '../components/Header/Header';
import Line from '../components/Line/Line';
import Music from '../components/MusicPlayer/Music/Music';
import { connect } from 'react-redux';

function HomePage({themeDark}) {
    return (
        <section className={`home ${themeDark === true ? 'dark-home' : ''}`}>
            <Header />
            <Line />
            <Music />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        themeDark: state.darkModeReducer,
    }
}

export default connect(mapStateToProps, null)(HomePage)