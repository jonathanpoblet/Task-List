import React, { useState,useEffect } from 'react';
import {LEVELS} from '../../models/levels'
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task';
import '../../styles/task.scss';


const TaskListComponent = () => {

    const defaultTask = new Task("Example","Default",false,LEVELS.NORMAL);

    const [tasks,setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false)
        return () => {
            console.log('Task list component is going to unmount')
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>
                    Your Task: 
                </h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
