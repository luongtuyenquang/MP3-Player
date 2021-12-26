import { connect } from "react-redux"
import { useEffect, useState } from 'react';
import './MusicPlaying.scss';

function MusicPlaying({music}) {

    const [playing, setPlaying] = useState(true)
    const [indexSong, setIndexSong] = useState(0)

    const handlePlayPause = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        const play = document.querySelector('.bx-play')
        const pause = document.querySelector('.bx-pause')
        const btnNextSong = document.querySelector('.bx-fast-forward')
        const btnPrevSong = document.querySelector('.bx-rewind')
        const song = document.querySelector('#song')

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

        // Cleanup
        return () => {
            btnNextSong.removeEventListener('click', nextSong)
            btnPrevSong.removeEventListener('click', prevSong)

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
                    <input type='range' />
                    <audio src={music[indexSong].mp3} id='song' />
                    <div className='music-playing__timer'>
                        <span>4:00</span>
                        <span>2:33</span>
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