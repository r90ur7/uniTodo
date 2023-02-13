import React, { useContext, useState } from 'react'
import '../../assets/Styles/Header.css'
import icone_ambulancia from '../../assets/ICO/plus.svg'
import { CountContext } from '../Context/CountModal'

export const Searchbox = () => {
    const { tasks, setTasks,ischecked,setTextInput,textInput } = useContext(CountContext)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.target.value)
    }

    const handleAddTask = () => {
        setTasks([...tasks, { id: tasks.length + 1, checked: ischecked, text: textInput }])
        setTextInput("")
    }

    return (
        <div className='HeaderWrapper__Searchbox'>
            <input
                className='Searchbox__Input'
                placeholder='Adicione uma nova tarefa'
                type="text"
                value={textInput}
                onChange={handleInputChange}
            />
            <button className='Searchbox__Button' onClick={handleAddTask}>
                <img className='Searchbox__Icon' src={icone_ambulancia} alt="criar tarefa" />
                Criar
            </button>
        </div>
    );
}

