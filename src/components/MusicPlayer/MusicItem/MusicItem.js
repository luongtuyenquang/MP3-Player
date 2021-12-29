import { connect } from "react-redux"
import './MusicItem.scss';

function MusicItem({music, indexCurrent}) {
    return (
        <>
            {
                music.map((item, index) => {
                    return (
                        <div className='music-item' style={{backgroundColor: `${indexCurrent === index ? '#4d007254': ''}`}} key={index}>
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

const mapStateToProps = state => {
    return {
        music: state.musicReducer,
        indexCurrent: state.indexReducer
    }
}

export default connect(mapStateToProps, null)(MusicItem)