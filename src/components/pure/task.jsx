import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, completed, remove}) => {

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL : 
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        { task.level }
                    </span>
                </h6>);
            case LEVELS.URGENT : 
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        { task.level }
                    </span>
                </h6>);
            case LEVELS.BLOCKING : 
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        { task.level }
                    </span>
                </h6>)
            default :
                break;
        }
    }

    function taskCompletedIcon() {
        if(task.completed) {
            return(<i onClick={() => completed(task)} className='bi-toggle-on task-action' style={{color: 'green' , fontSize: '20px'}}></i>)
        }
        else{
            return(<i onClick={() => completed(task)} className='bi-toggle-off task-action' style={{color: 'grey' , fontSize: '20px'}}></i>)
        }
    }

    const taskCompleted = {
        fontWeight: 'bold',
        color: 'gray',
        textDecoration: 'line-through',
    }

    const taskPending = {
        color:'333',
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <td>
                <span className='ms-2'>{ task.name }</span>
            </td>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { taskCompletedIcon() }
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'red', fontSize: '20px'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
