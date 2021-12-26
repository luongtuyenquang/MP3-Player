import './MusicPlaying.scss';
import img1 from '../../../assets/images/song_1.png'
import song1 from '../../../assets/mp3/song_1.mp3'
import { useEffect, useState } from 'react';

function MusicPlaying() {

    const [playing, setPlaying] = useState(true)

    const handlePlayPause = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        const play = document.querySelector('.bx-play')
        const pause = document.querySelector('.bx-pause')
        const song = document.querySelector('#song')

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

        return () => {
            if(playing) {
                play.removeEventListener('click', playSong)
            } else {
                pause.removeEventListener('click', pauseSong)
            }
        }

    }, [playing])

    return (
        <div className='music-playing'>
            <p className='music__heading'>Bài hát hiện tại</p>
            <div className='music-playing__group'>
                <img src={img1} alt='' className='music-playing__img' />
                <p className='music-playing__song'>Hỏi Thăm Nhau</p>
                <p className='music-playing__singer'>Lê Bảo Bình</p>
                <div className='music-playing__range'>
                    <input type='range' />
                    <audio src={song1} id='song'/>
                    <div className='music-playing__timer'>
                        <span>4:00</span>
                        <span>2:33</span>
                    </div>
                </div>
                <div className='music-playing__control'>
                    <i className='bx bx-shuffle music-playing__control__icon'></i>
                    <i className='bx bx-rewind music-playing__control__icon'></i>
                    <i 
                        className={`bx bx-${playing ? 'play' : 'pause'} music-playing__control__icon music-playing__control__icon--color`} 
                        onClick={handlePlayPause}
                    >
                    </i>
                    <i className='bx bx-fast-forward music-playing__control__icon'></i>
                    <i className='bx bx-repeat music-playing__control__icon'></i>
                </div>
            </div>
        </div>
    )
}

export default MusicPlaying