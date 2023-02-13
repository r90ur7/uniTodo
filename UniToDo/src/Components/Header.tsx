import React from 'react'
import '../assets/Styles/Header.css' 
import { Searchbox } from './Moleculas/Searchbox'
import { Tema } from './Moleculas/Tema' 


export const Header = () => {
    return (
        <div className='HeaderWrapper'>
            <Tema />
            <h1>uniTodo</h1>
            <Searchbox />
        </div>
    );
}

