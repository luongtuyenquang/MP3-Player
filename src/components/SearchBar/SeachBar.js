import { useEffect } from 'react';
import '../SearchBar/SeachBar.scss';

function SearchBar() {

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

    return (
        <section className='search'>
            <div className='search__group'>
                <i className='bx bx-search'></i>
                <input type='text' className='search__input' placeholder='Search' />
            </div>
        </section>
    )
}

export default SearchBar