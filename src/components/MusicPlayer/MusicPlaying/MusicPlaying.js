import { connect } from "react-redux"
import { useEffect, useState, useRef } from 'react';
import './MusicPlaying.scss';
import { activeSong } from "../../../redux/actions";

function MusicPlaying({music, handleActiveSong, indexCurrent}) {

    const [isPlaying, setIsPlaying] = useState(true)
    const [isRepeat, setIsRepeat] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [indexSong, setIndexSong] = useState(0)
    const [durationTimer, setDurationTimer] = useState(null)
    const [remainingTimer, setRemainingTimer] = useState(null)
    const song = useRef(null)
    const rangeBar = useRef(null)

    // Play Song
    function playSong() {
        song.current.play()
    }

    // Pause Song
    function pauseSong() {
        song.current.pause()
    }

    // Play, Pause Song
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
        if(isPlaying) {
            playSong()
        } else {
            pauseSong()
        }
    }

    // Next Song
    function nextSong() {
        if(indexSong + 1 === music.length) {
            setIndexSong(0)
            setIsPlaying(true)
            handlePercentSong()
            playSong()
        } else if(isShuffle) {
            handleShuffleSong()
            setIsPlaying(true)
        } else {
            setIndexSong(indexSong + 1)
            setIsPlaying(true)
            playSong()
        }
    }

     // Previous Song
     function prevSong() {
        if(indexSong - 1 < 0) {
            setIndexSong(music.length - 1)
            setIsPlaying(true)
            handlePercentSong()
            playSong()
        } else if(isShuffle) {
            handleShuffleSong()
            setIsPlaying(true)
        } else {
            setIndexSong(indexSong - 1)
            setIsPlaying(true)
            playSong()
        }
    }

    // Song Percent on Range Bar
    function handlePercentSong() {
        // rangeBar.value = song.currentTime
        let rangePercent
        if(song.current.currentTime === 0) {
            rangePercent = 0
        } else {
            rangePercent = Math.floor(song.current.currentTime / song.current.duration * 100)
        }
            rangeBar.current.value = rangePercent
    }

      // Ended Song
    function handleEndedSong() {
        if(isRepeat) {
            playSong()
        } else if(isShuffle) {
            handleShuffleSong()
            setIsPlaying(false)
        } else {
            nextSong()
            setIsPlaying(false)
        }
    }

    // Repeat Song
    function handleRepeatSong() {
        setIsRepeat(!isRepeat)
    }

    function handleTrueFalseShuffle() {
        setIsShuffle(!isShuffle)
    }
    
    // Shuffle Song
    function handleShuffleSong() {
        let newIndexSong
        do {
            newIndexSong = Math.floor(Math.random() * music.length)
        } while (newIndexSong === indexSong)
        setIndexSong(newIndexSong)
        playSong()
    }

    // Rewind
    function handleRewind(e) {
        let percentSong = 0;
        percentSong = e.target.value;
        const seekTime = percentSong / 100 * song.current.duration;
        song.current.currentTime = seekTime;
    }

    // Song Duration
    function formatTimer(timer) {
        const minutes = Math.floor(timer / 60)
        const seconds = Math.floor(timer - minutes * 60)
        const formatSecond = `0${seconds}`.slice(-2)
        return `${minutes}:${formatSecond}`
    }


    useEffect(() => {
        const songCurrent = song.current
        const rangeBarCurrent = rangeBar.current

        // Song Duration
        song.current.onloadedmetadata = function() {
            setDurationTimer(formatTimer(song.current.duration))
        };

        // Song Remaining Time
        const remainingSong = setInterval(() => {
            setRemainingTimer(formatTimer(song.current.currentTime))
        }, 500)

        // Active Song
        handleActiveSong(indexSong)

        function keySpace(e) {
            if(e.which === 32) {
                handlePlayPause()
            }
        }

        document.addEventListener('keyup', keySpace)
        song.current.addEventListener('timeupdate', handlePercentSong)
        rangeBar.current.addEventListener('input', handleRewind)
        song.current.addEventListener('ended', handleEndedSong)

        // Cleanup
        return () => {
            document.removeEventListener('keyup', keySpace)
            songCurrent.removeEventListener('ended', handleEndedSong)
            rangeBarCurrent.removeEventListener('input', handleRewind)
            songCurrent.removeEventListener('timeupdate', handlePercentSong)
            clearInterval(remainingSong)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, isRepeat, isShuffle, indexSong])


    // Play Song When Click
    useEffect(() => {
        if(typeof indexCurrent === 'number') {
            setIndexSong(indexCurrent)
            if(isShuffle) {
                setIsPlaying(isPlaying)
            } else {
                setIsPlaying(true)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexCurrent])


    return (
        <div className='music-playing'>
            <p className='music__heading'>Bài hát hiện tại</p>
            <div className='music-playing__group'>
                <img src={music[indexSong].image} alt='' className='music-playing__img' />
                <p className='music-playing__song'>{music[indexSong].name}</p>
                <p className='music-playing__singer'>{music[indexSong].singer}</p>
                <div className='music-playing__range'>
                    <input type='range' ref={rangeBar} id='range' defaultValue='0' step='1' min='0' max='100' />
                    <audio src={music[indexSong].mp3} ref={song} id='song' preload="metadata" />
                    <div className='music-playing__timer'>
                        <span>{durationTimer}</span>
                        <span>{remainingTimer}</span>
                    </div>
                </div>
                <div className='music-playing__control'>
                    <i 
                        className='bx bx-shuffle music-playing__control__icon'
                        style={{color: `${isShuffle ? '#f8495a': ''}`}}
                        onClick={handleTrueFalseShuffle}
                    >
                    </i>
                    <i 
                        className='bx bx-rewind music-playing__control__icon' 
                        onClick={prevSong}
                    >
                    </i>
                    <i 
                        className={`bx bx-${isPlaying ? 'play' : 'pause'} music-playing__control__icon music-playing__control__icon--color`} 
                        onClick={handlePlayPause}
                    >
                    </i>
                    <i 
                        className='bx bx-fast-forward music-playing__control__icon'
                        onClick={nextSong}
                    >
                    </i>
                    <i 
                        className='bx bx-repeat music-playing__control__icon'
                        style={{color: `${isRepeat ? '#f8495a': ''}`}}
                        onClick={handleRepeatSong}
                    >
                    </i>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleActiveSong: (indexSong) => {
            dispatch(activeSong(indexSong))
        }
    }
}

const mapStateToProps = state => {
    return {
        music: state.musicReducer,
        indexCurrent: state.indexReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlaying)