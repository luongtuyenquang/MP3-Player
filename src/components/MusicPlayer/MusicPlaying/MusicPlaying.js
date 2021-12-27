import { connect } from "react-redux"
import { useEffect, useState } from 'react';
import './MusicPlaying.scss';

function MusicPlaying({music}) {

    const [playing, setPlaying] = useState(true)
    const [indexSong, setIndexSong] = useState(0)
    const [durationTimer, setDurationTimer] = useState(null)
    const [remainingTimer, setRemainingTimer] = useState(null)

    const handlePlayPause = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        const song = document.querySelector('#song')
        const rangeBar = document.querySelector('#range')
        const play = document.querySelector('.bx-play')
        const pause = document.querySelector('.bx-pause')
        const btnNextSong = document.querySelector('.bx-fast-forward')
        const btnPrevSong = document.querySelector('.bx-rewind')

        // Play and Pause Song
        function playSong() {
            song.play()
        }

        function pauseSong() {
            song.pause()
        }

        if(playing) {
            play.addEventListener('click', playSong)
        } else {
            pause.addEventListener('click', pauseSong)
        }

        // Next Song
        function nextSong() {
            if(indexSong + 1 === music.length) {
                setIndexSong(0)
                setPlaying(true)
                song.play()
            } else {
                setIndexSong(indexSong + 1)
                setPlaying(true)
                song.play()
            }
        }

        btnNextSong.addEventListener('click', nextSong)

        // Previous Song
        function prevSong() {
            if(indexSong - 1 < 0) {
                setIndexSong(music.length - 1)
                setPlaying(true)
                song.play()
            } else {
                setIndexSong(indexSong - 1)
                setPlaying(true)
                song.play()
            }
        }

        btnPrevSong.addEventListener('click', prevSong)

        // Song Duration
        function formatTimer(timer) {
            const minutes = Math.floor(timer / 60)
            const seconds = Math.floor(timer - minutes * 60)
            const formatSecond = `0${seconds}`.slice(-2)
            return `${minutes}:${formatSecond}`
        }
        
        song.onloadedmetadata = function() {
            setDurationTimer(formatTimer(song.duration))
        };

        // Song Remaining Time
        const remainingSong = setInterval(() => {
            setRemainingTimer(formatTimer(song.currentTime))
        }, 1000)

        // Song Percent on Range Bar
        function handlePercentSong() {
            // rangeBar.value = song.currentTime
            const rangePercent = Math.floor(song.currentTime / song.duration * 100)
            rangeBar.value = rangePercent
        }
        song.addEventListener('timeupdate', handlePercentSong)

        // Rewind
        function handleRewind(e) {
            let percentSong = 0;
            percentSong = e.target.value;
            const seekTime = percentSong / 100 * song.duration;
            song.currentTime = seekTime;
        }
        rangeBar.addEventListener('input', handleRewind)

          // Ended Song
        function handleEndedSong() {
            nextSong()
            setPlaying(false)
        }
        song.addEventListener('ended', handleEndedSong)

        // Cleanup
        return () => {
            btnNextSong.removeEventListener('click', nextSong)
            btnPrevSong.removeEventListener('click', prevSong)
            song.removeEventListener('ended', handleEndedSong)
            rangeBar.removeEventListener('input', handleRewind)
            song.removeEventListener('timeupdate', handlePercentSong)
            clearInterval(remainingSong)

            if(playing) {
                play.removeEventListener('click', playSong)
            } else {
                pause.removeEventListener('click', pauseSong)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing])

    return (
        <div className='music-playing'>
            <p className='music__heading'>Bài hát hiện tại</p>
            <div className='music-playing__group'>
                <img src={music[indexSong].image} alt='' className='music-playing__img' />
                <p className='music-playing__song'>{music[indexSong].name}</p>
                <p className='music-playing__singer'>{music[indexSong].singer}</p>
                <div className='music-playing__range'>
                    <input type='range' id='range' defaultValue='0' step='1' min='0' max='100' />
                    <audio src={music[indexSong].mp3} id='song' preload="metadata" />
                    <div className='music-playing__timer'>
                        <span>{durationTimer}</span>
                        <span>{remainingTimer}</span>
                    </div>
                </div>
                <div className='music-playing__control'>
                    <i className='bx bx-shuffle music-playing__control__icon'></i>
                    <i 
                        className='bx bx-rewind music-playing__control__icon' 
                        onClick={handlePlayPause}
                    >
                    </i>
                    <i 
                        className={`bx bx-${playing ? 'play' : 'pause'} music-playing__control__icon music-playing__control__icon--color`} 
                        onClick={handlePlayPause}
                    >
                    </i>
                    <i 
                        className='bx bx-fast-forward music-playing__control__icon'
                        onClick={handlePlayPause}
                    >
                    </i>
                    <i className='bx bx-repeat music-playing__control__icon'></i>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        music: state.musicReducer
    }
}

export default connect(mapStateToProps, null)(MusicPlaying)