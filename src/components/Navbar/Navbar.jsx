import './Navbar.scss'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={'/react.svg'} alt='LOGO' />

                <nav className="navbar">
                    <p className="navbar__link">Enlace 1</p>
                    <p className="navbar__link">Enlace 2</p>
                    <p className="navbar__link">Enlace 3</p>
                </nav>
            </div>
        </header>
    )
}