import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';
import TaskForm2 from '../pure/forms/taskForm2';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Default description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Default description 3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([ defaultTask,defaultTask2,defaultTask3 ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },2000 );
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
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return(
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
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    }
    else {
        tasksTable = 
        (
            <div>
                <h3>There are no tasks</h3>
                <h4>Please create a task</h4>
            </div>
        )
    }

    const loadingStyle = {
        color:'grey',
        fontSize:'30px',
        fontWeight:'bold',
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
                        style={ {position: 'relative', height: '500'} }
                    >
                        { loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable }
                        
                    </div>
                </div>
            </div>
            <TaskForm2
                add={addTask}
                length={tasks.length}
            >
            </TaskForm2>
        </div>
    );
}

export default TaskListComponent;
