import React,{useState} from 'react'
import '../../assets/Styles/Body.css'
import lixeira from '../../assets/ico/lixeira.svg'

interface props{
    count:number
    def:(event: any) => void
    check:boolean
}

export const TaskPreencher: React.FC<props> =({count,def,check})  => {
    const [tasks, setTasks] = useState([{ id: 1, checked: check, text: "" },
                                        { id: 2, checked: check, text: "" }
    ])
    const handleAddTask = () => {
        setTasks([...tasks, { id: tasks.length + 1, checked: false, text: "" }])
    }
    const handleDelete = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }
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
                            onClick={def} />
                        <div className='FakeButton Completed'></div>
                    </div>
                    <label className='Label' htmlFor="task">
                        <textarea 
                            title='description' 
                            className={task.checked ? 'Texto tarefacompleta' : "Texto"} 
                            name="task"></textarea>
                    </label>
                    <button 
                        className='BotaoLixo' 
                        onClick={() => handleDelete(task.id)}>
                        <img src={lixeira} alt="imagem-lixeira" />
                    </button>
                </li>
            ))}
        </ul>

    );
}