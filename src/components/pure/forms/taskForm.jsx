import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class'

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        );
        add(newTask);
    }

    const normalStyle = {
        color:'blue',
        fontWeight:'bold'
    }
    const urgentStyle = {
        color:'yellow',
        fontWeight:'bold'
    }

    const blockingStyle = {
        color:'tomato',
        fontWeight:'bold'
    }


    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task description' />
                <select ref={levelRef} className='form-control form-control-lg' defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-3' onClick={addTask}>
                {
                    length > 0 ? 
                    'Add task'
                    :
                    'Create your first task'
                }
                Add
            </button>
            </div>
        </form>
    );
}

TaskForm.Prototypes = {
    add: PropTypes.func.isRequiered,
    length: PropTypes.number.isRequired,
}

export default TaskForm;
