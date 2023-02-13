import React from 'react'
import '../../assets/Styles/Header.css'
import sol from '../../assets/ico/sol.svg'
import lua from '../../assets/ico/lua.svg'

export const Tema = () => {
    return (
        <div className='HeaderWrapper__Tema'>
            <img src={sol} alt="icone_tema" />
        </div>
    );
}