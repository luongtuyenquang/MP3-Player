import MusicPlaying from "../MusicPlaying/MusicPlaying"
import MusicList from "../MusicList/MusicList";
import './Music.scss';

function Music() {
    return (
        <section className='music'>
            <MusicPlaying />
            <MusicList />
        </section>
    )
}

export default Music