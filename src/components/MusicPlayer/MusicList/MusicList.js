import { connect } from "react-redux"
import MusicItem from "../MusicItem/MusicItem"
import './MusicList.scss'

function MusicList({music}) {

    const totalSong = music.length

    return (
        <div className='music-list'>
            <div className='music-item__heading'>
                <p className='music__heading'>Danh sách bài hát</p>
                <span>Hiện có: {totalSong} bài hát</span>
            </div>
            <div className='music-list__list'>
                <MusicItem />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        music: state.musicReducer
    }
}

export default connect(mapStateToProps, null)(MusicList)