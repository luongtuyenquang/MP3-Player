import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import '../SearchBar/SeachBar.scss';
import { searchSong } from '../../redux/actions';

function SearchBar({music, handleSearchSong}) {

    const [valueInput, setValueInput] = useState('')
    const inputRef = useRef() 

    useEffect(() => {
        const searchGroup = document.querySelector('.search__group')
        const input = document.querySelector('.search__input')

        function addFocus() {
            searchGroup.classList.add('focus')
        }

        function removeFocus() {
            searchGroup.classList.remove('focus')
        }

        input.addEventListener('focus', addFocus)
        input.addEventListener('blur', removeFocus)

        return () => {
            input.removeEventListener('focus', addFocus)
            input.removeEventListener('blur', removeFocus)
        }
    },[])

    useEffect(() => {
        handleSearchSong(valueInput.trim())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueInput])

    const handleFocusInput = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        inputRef.current.addEventListener('keyup', (e) => {
            e.stopPropagation()
        })
    }, [])

    return (
        <section className='search'>
            <div className='search__group'>
                <i onClick={handleFocusInput} className='bx bx-search'></i>
                <input
                    type='text' 
                    className='search__input' 
                    placeholder='Nhập tên bài hát hoặc ca sĩ'
                    onChange={(e) => setValueInput(e.target.value)}
                    ref={inputRef}
                />
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSearchSong: (valueInput) => {
            dispatch(searchSong(valueInput))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)