import { connect } from "react-redux"
import './MusicItem.scss';
import { playSongWhenClick } from "../../../redux/actions";

function MusicItem({music, indexCurrent, handlePlaySongWhenClick}) {
    const handleClickSong = (index) => {
        handlePlaySongWhenClick(index)
    }

    return (
        <>
            {
                music.map((item, index) => {
                    return (
                        <div 
                            className='music-item' 
                            style={{backgroundColor: `${indexCurrent === index ? '#4d007254': ''}`}}
                            onClick={() => handleClickSong(index)}
                            key={index}
                        >
                            <p className='music-item__stt'>{item.id}</p>
                            <img src={item.image} alt='' className='music-item__img' />
                            <p className='music-item__song'>{item.name}</p>
                            <p className='music-item__singer'>{item.singer}</p>
                            <p className='music-item__timer'>4:30</p>
                        </div>
                    )
                })
            }
        </>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handlePlaySongWhenClick: (index) => {
            dispatch(playSongWhenClick(index))
        }
    }
}

const mapStateToProps = state => {
    return {
        music: state.musicReducer,
        indexCurrent: state.indexReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicItem)