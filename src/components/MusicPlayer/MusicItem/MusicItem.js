import { connect } from "react-redux"
import './MusicItem.scss';
import { playSongWhenClick } from "../../../redux/actions";
import { useEffect, useState } from "react";

function MusicItem({item, index, indexCurrent, handlePlaySongWhenClick, handleSaveDurationTime, durationTime}) {
    
    const handleClickSong = (index) => {
        handlePlaySongWhenClick(index)
    }

    useEffect(() => {
        const songs = document.querySelectorAll('.song')
        
        songs.forEach((song) => {
            song.onloadedmetadata = function() {
                formatTimer(song.duration)
            }
        })
    }, [])
    
    // Song Duration
    function formatTimer(timer) {
        const minutes = Math.floor(timer / 60)
        const seconds = Math.floor(timer - minutes * 60)
        const formatSecond = `0${seconds}`.slice(-2)
        return `${minutes}:${formatSecond}`
    }


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
            <audio src={item.mp3} className='song' preload="metadata" />
            <p className='music-item__timer'>4:30</p>
        </div>
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
        indexCurrent: state.indexReducer,
        valueSearch: state.searchReducer,
        durationTime: state.durationTimeReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicItem)