import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Default description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Default description 3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([ defaultTask,defaultTask2,defaultTask3 ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);
    
    function completedTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    } 

    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'> 
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks
                        </h5>
                    </div>
                    <div className='card-body' 
                        data-mdb-perfect-scrollbar = 'true'
                        style={ {position: 'relative', height: '500'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>   
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task,index) => {
                                        return(
                                            <TaskComponent
                                                task={task}
                                                key={index}
                                                completed={completedTask}
                                                remove={deleteTask}
                                            >
                                            </TaskComponent>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
                <TaskForm
                    add={addTask}
                >

                </TaskForm>
            </div>
        </div>
    );
}

export default TaskListComponent;
