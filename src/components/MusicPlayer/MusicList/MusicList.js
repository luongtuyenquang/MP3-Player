import MusicItem from "../MusicItem/MusicItem"
import './MusicList.scss'

function MusicList() {
    return (
        <div className='music-list'>
            <div className='music-item__heading'>
                <p className='music__heading'>Danh sách bài hát</p>
                <span>Hiện có: 55 bài hát</span>
            </div>
            <div className='music-list__list'>
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
                <MusicItem />
            </div>
        </div>
    )
}

export default MusicList