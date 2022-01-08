import { connect } from "react-redux"
import MusicItem from "../MusicItem/MusicItem"
import './MusicList.scss'
import removeVietNameseTones from '../../../utils/removeVietNameseTones.js'
import { useState, useEffect } from "react"


function MusicList({music, valueSearch}) {
    
    const [isSort, setIsSort] = useState(true)
    const [listMusic, setListMusic] = useState([])
    const totalSong = music.length

    const newMusic = music

    useEffect(() => {
        const searched = newMusic.filter((item) => {
            return item.name.toLowerCase().includes(valueSearch.toString().toLowerCase()) 
            || item.singer.toLowerCase().includes(valueSearch.toString().toLowerCase())
            || removeVietNameseTones(item.name.toLowerCase()).includes(valueSearch.toString().toLowerCase())
            || removeVietNameseTones(item.singer.toLowerCase()).includes(valueSearch.toString().toLowerCase())
        })
        setListMusic(searched)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSearch])

    const handleIsSort = () => {
        setIsSort(!isSort)

        if(isSort) {
            listMusic.sort((a, b) => (a.name < b.name) ? 1 : -1)
     
         } else {
            listMusic.sort((a, b) => (a.name > b.name) ? 1 : -1)
         }
    }

    return (
        <div className='music-list'>
            <div className='music-item__heading'>
                <p className='music__heading'>Danh sách bài hát
                    <span className='music-list__sort'>
                        <i 
                            className={`bx bx-${isSort ? 'down' : 'up'}-arrow-alt`} 
                            onClick={handleIsSort}
                        >
                        </i>
                    </span>
                </p>
                <span>Hiện có: {totalSong} bài hát</span>
            </div>
            <div className='music-list__list'>
                {
                    listMusic.length === 0 
                    ? 
                        <span className='search-empty__description'>Không tìm thấy bài hát !</span> 
                    :
                        listMusic.map((item, index) => {
                            return <MusicItem item={item} index={index} key={index} />
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