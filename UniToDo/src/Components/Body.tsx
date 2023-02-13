import React, {useState} from 'react'
import '../../src/assets/Styles/Body.css' 
import { Tarefascount } from '../Components/Moleculas/Tarefascount'
import { Task } from './Moleculas/Tasks'

export const Body = () => {

    const [len, setLen] = useState(1)
    const [lenConcluidas, setcountConcluidas] = useState(0)
    const [ischecked, setisChecked] = useState(false)

    const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        let checked =event.target.checked
        setisChecked(checked)
        if (checked) {
            setcountConcluidas(lenConcluidas + 1);
            console.log(ischecked)
        } else {
            if(lenConcluidas > 0){
                setcountConcluidas(lenConcluidas - 1);
            }
        }
    }
    return (
        <div className='Tarefascount__Wrapper'>
            <Tarefascount count={len} countConcluidas={lenConcluidas} />
            <Task 
                check={ischecked} 
                def={handleCheckboxClick} 
                count={len} /
                
                >
        </div>
    );
}