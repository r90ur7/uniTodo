import React from 'react'
import '../../assets/Styles/Header.css'
import icone_ambulancia from '../../assets/ico/plus.svg'

export const Searchbox = () => {
    return (
        <div className='HeaderWrapper__Searchbox'>
            <input className='Searchbox__Input' placeholder='Adicione uma nova tarefa' type="text"/>
            <button className='Searchbox__Button'>
                Criar
                <img className='Searchbox__Icon' src={icone_ambulancia} alt="" />
            </button>
        </div>
    );
}