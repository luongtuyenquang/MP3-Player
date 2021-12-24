import './NavMenu.scss';

function NavMenu() {
    return (
        <nav className='nav'>
            <ul className='nav__menu'>
                <li>
                    <a href='#1'>
                        <i className='bx bx-home-alt'></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#1'>
                        <i className='bx bx-file'></i>
                        Album
                    </a>
                </li>
                <li>
                    <a href='#1'>
                        <i className='bx bx-user'></i>
                        Artists
                    </a>
                </li>
            </ul>

            <div className='nav__title'>THỂ LOẠI</div>

            <ul className='nav__menu'>
                <li>
                    <a href='#1'>
                        <i className='bx bx-music'></i>
                        Rap
                    </a>
                </li>
                <li>
                    <a href='#1'>
                        <i className='bx bx-music'></i>
                        Remix
                    </a>
                </li>
                <li>
                    <a href='#1'>
                        <i className='bx bx-music'></i>
                        Trữ Tình
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default NavMenu