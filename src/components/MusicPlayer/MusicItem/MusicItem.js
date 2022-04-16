import { connect } from "react-redux"
import './MusicItem.scss';
import { playSongWhenClick } from "../../../redux/actions";
import { useEffect } from "react";
import { saveDurationTime } from "../../../redux/actions";

function MusicItem({item, index, indexCurrent, handlePlaySongWhenClick, handleSaveDurationTime, durationTime, themeDark}) {
    
    const handleClickSong = (index) => {
        handlePlaySongWhenClick(index)
    }

    useEffect(() => {
        const songs = document.querySelectorAll('.song')

        songs.forEach((song) => {
            song.onloadedmetadata = function() {
                handleSaveDurationTime(formatTimer(song.duration))
             }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    // Song Duration
    function formatTimer(timer) {
        const minutes = Math.floor(timer / 60)
        const seconds = Math.floor(timer - minutes * 60)
        const formatSecond = `0${seconds}`.slice(-2)
        return `${minutes}:${formatSecond}`
    }

    const abc = () => {
        if (indexCurrent === index && themeDark === true) {
            return '#332940'
        } else if(indexCurrent === index) {
            return '#cbbaac'
        }
    }

    return (
        <div 
            className={`music-item ${themeDark === true ? 'dark-item dark-item--hover' : ''}`} 
            style={{backgroundColor: abc()}}
            onClick={() => handleClickSong(index)}
            key={index}
        >
            <p className={`music-item__stt ${themeDark === true ? 'dark-item__text' : ''}`}>{index + 1}</p>
            <img src={item.image} alt='' className='music-item__img' />
            <p className={`music-item__song ${themeDark === true ? 'dark-item__text' : ''}`}>{item.name}</p>
            <p className={`music-item__singer ${themeDark === true ? 'dark-item__text' : ''}`}>{item.singer}</p>
            <audio src={item.mp3} className='song' preload="metadata" />
            <p className={`music-item__timer ${themeDark === true ? 'dark-item__text' : ''}`}>
                {
                    durationTime.map((item, indexDuration) => {
                        if(index === indexDuration) return item
                        else return null
                    })
                }
            </p>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handlePlaySongWhenClick: (index) => {
            dispatch(playSongWhenClick(index))
        },
        handleSaveDurationTime: (time) => {
            dispatch(saveDurationTime(time))
        }
    }
}

const mapStateToProps = state => {
    return {
        music: state.musicReducer,
        indexCurrent: state.indexReducer,
        valueSearch: state.searchReducer,
        durationTime: state.durationTimeReducer,
        themeDark: state.darkModeReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicItem)