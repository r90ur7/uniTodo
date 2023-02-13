import React from 'react'
import '../../assets/Styles/Body.css'
import lixeira from '../../assets/ico/lixeira.svg'

interface props{
    count:number
    def:(event: any,taskId: number) => void
    check:boolean
    ondelete:(taskId: number) => void

}
interface tasks{
    tasks: {
    id: number;
    checked: boolean;
    text: string;
    }[]
}

export const TaskPreencher: React.FC<props & tasks> =({count,def,check,ondelete,tasks})  => {

    return (
        <ul className='TasksPreencher'>
            {tasks.map((task) => (
                <li key={task.id} className='TaskParaPreencher'>
                    <div className='TaskPPreencher'>
                        <input 
                            title='radiobutton' 
                            className='RadioButton' 
                            checked={task.checked} 
                            id='task' type='checkbox' 
                            onChange={(event) => def(event, task.id)} />
                        <div className='FakeButton Completed'></div>
                    </div>
                    <label className='Label' htmlFor="task">
                        <textarea 
                            title='description' 
                            className={task.checked ? 'Texto tarefacompleta' : "Texto"} 
                            name="task" defaultValue={task.text}></textarea>
                    </label>
                    <button 
                        className='BotaoLixo' 
                        onClick={() => ondelete(task.id)}>
                        <img src={lixeira} alt="imagem-lixeira" />
                    </button>
                </li>
            ))}
        </ul>

    );
}