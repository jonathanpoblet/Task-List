import React,{ useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import '../../styles/task.scss'



const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)   
        };
    }, [task]);

    return (
        <div>
            <h2 className='task-name'>
                Nombre: { task.name}
            </h2>
            <h2>
                Apellido: { task.surname}
            </h2>
            <h3>
                Level: { task.level }
            </h3>
            <h4>
                This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
            </h4>
        </div>
    );
};


TaskComponent.propTypes = {
    contact: PropTypes.instanceOf(Task)
};


export default TaskComponent;
