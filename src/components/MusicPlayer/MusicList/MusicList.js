import { connect } from "react-redux"
import MusicItem from "../MusicItem/MusicItem"
import './MusicList.scss'
import removeVietNameseTones from '../../../utils/removeVietNameseTones.js'
import { useState } from "react"


function MusicList({music, valueSearch, themeDark}) {
    
    const [isSort, setIsSort] = useState(true)
    const totalSong = music.length

    const searchSong = (song) => {
        return song.name.toLowerCase().includes(valueSearch.toString().toLowerCase()) 
        || song.singer.toLowerCase().includes(valueSearch.toString().toLowerCase())
        || removeVietNameseTones(song.name.toLowerCase()).includes(valueSearch.toString().toLowerCase())
        || removeVietNameseTones(song.singer.toLowerCase()).includes(valueSearch.toString().toLowerCase())
    }
    
    const handleIsSort = () => {
        setIsSort(!isSort)

        if(isSort) {
            music.sort((a, b) => (a.name < b.name) ? 1 : -1)
     
         } else {
            music.sort((a, b) => (a.name > b.name) ? 1 : -1)
         }
    }

    return (
        <div className='music-list'>
            <div className='music-item__heading'>
                <p className={`music__heading ${themeDark === true ? 'dark-item__text' : ''}`}>Danh sách bài hát
                    <span className='music-list__sort'>
                        <i 
                            className={`bx bx-${isSort ? 'down' : 'up'}-arrow-alt ${themeDark === true ? 'dark-item__text' : ''}`} 
                            onClick={handleIsSort}
                        >
                        </i>
                    </span>
                </p>
                <span className={`${themeDark === true ? 'dark-item__text' : ''}`}>Hiện có: {totalSong} bài hát</span>
            </div>
            <div className={`music-list__list ${themeDark === true ? 'dark-item__color' : ''}`}>
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
        valueSearch: state.searchReducer,
        themeDark: state.darkModeReducer,
    }
}

export default connect(mapStateToProps, null)(MusicList)