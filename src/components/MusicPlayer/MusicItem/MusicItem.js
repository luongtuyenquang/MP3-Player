import './MusicItem.scss';
import img from '../../../assets/images/song_1.png'

function MusicItem() {
    return (
        <div className='music-item'>
            <p className='music-item__stt'>01</p>
            <img src={img} alt='' className='music-item__img' />
            <p className='music-item__song'>Hỏi Thăm Nhau</p>
            <p className='music-item__singer'>Lê Bảo Bình</p>
            <p className='music-item__timer'>4:30</p>
        </div>
    )
}

export default MusicItem