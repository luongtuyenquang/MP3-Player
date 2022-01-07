import { connect } from "react-redux"
import MusicItem from "../MusicItem/MusicItem"
import './MusicList.scss'
import removeVietNameseTones from '../../../utils/removeVietNameseTones.js'


function MusicList({music, valueSearch}) {
    
    const totalSong = music.length

    const searchSong = (song) => {
        return song.name.toLowerCase().includes(valueSearch.toString().toLowerCase()) 
        || song.singer.toLowerCase().includes(valueSearch.toString().toLowerCase())
        || removeVietNameseTones(song.name.toLowerCase()).includes(valueSearch.toString().toLowerCase())
        || removeVietNameseTones(song.singer.toLowerCase()).includes(valueSearch.toString().toLowerCase())
    }

    return (
        <div className='music-list'>
            <div className='music-item__heading'>
                <p className='music__heading'>Danh sách bài hát
                    <span className='music-list__sort'>
                        <i className='bx bx-sort-alt-2'></i>
                    </span>
                </p>
                <span>Hiện có: {totalSong} bài hát</span>
            </div>
            <div className='music-list__list'>
                {
                    music.map((item, index) => {
                        if(searchSong(item)) {
                            return <MusicItem item={item} index={index} key={index} />
                        } else return null
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        music: state.musicReducer,
        valueSearch: state.searchReducer
    }
}

export default connect(mapStateToProps, null)(MusicList)