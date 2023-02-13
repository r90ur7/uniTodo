import React from 'react'
import '../../assets/Styles/Body.css'
import lixeira from '../../assets/ico/lixeira.svg'

interface props{
    count:number
    def:(event: any) => void
    check:boolean
}

export const TaskPreencher: React.FC<props> =({count,def,check})  => {
    return (
        <ul className='TasksPreencher'>
            <li className='TaskParaPreencher'>
                <div className='TaskPPreencher'>
                    <input className='RadioButton' checked={check} id='task' type={'checkbox'} onClick={def}/> 
                    <div className='FakeButton Completed'></div>
                </div>
                <label className='Label' htmlFor="task">
                    <textarea className={check?'Texto tarefacompleta':"Texto"} name="task"  cols="30" rows="10"></textarea>
                </label>
                <button className='BotaoLixo'>
                    <img src={lixeira} alt="imagem-lixeira" />
                </button>
            </li>
        </ul>

    );
}