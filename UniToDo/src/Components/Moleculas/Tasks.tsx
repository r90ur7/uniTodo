import '../../assets/Styles/Body.css' 
import { EmptyTask } from '../Atomos/EmptyTask';
import { TaskPreencher } from '../Atomos/TaskPreencher';

interface props{
    count:number
    def:(event: any) => void
    check:boolean
}

export const Task: React.FC<props> = ({count,def,check})  => {
    const len = count
    return (
        <div className={len > 0 ?"Task":"Task empty"} >
            {len > 0 ?  <TaskPreencher count={count} check={check} def={def} />: <EmptyTask />}
        </div>
    );
}