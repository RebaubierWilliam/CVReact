import React from 'react'
import './Header.scss';

function Header() {
    return (
        <div className='header__conteneur'>
            <div className='header__conteneur__citation'>
                Le génie n'est pas celui qui croit mais celui qui saisit la progression des choses
            </div>
            <div className='header__conteneur__auteur'>
                -Allan Turring
            </div>
        </div>
    )
}

export default Header