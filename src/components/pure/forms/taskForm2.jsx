import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Form, Field ,ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formTaskSchema = Yup.object().shape(
    {
        name : Yup.string()
                    .min(5,'Name task too short')
                    .max(20,'Name task too long')
                    .required('Name is required'),
        description: Yup.string()
                    .min(5,'Description too short')
                    .max(20,'Description too long')
                    .required('Description is required'),
    }
);


const TaskForm2 = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const initialValues = {
        name:'',
        description:'',
        completed: false,
        level: LEVELS.NORMAL
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
        <div>
            <h4>Add Task </h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={ formTaskSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setInterval(r,1000));
                    alert(JSON.stringify(values,null,2));
                    add(values);
                }}
            >

                {props => {
                    const  {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                    } = props;

                    return(
                       <Form style={{ display:'flex',flexDirection:'column' }}>
                            <label htmlFor="name">Task name</label>
                            <Field id="name" type='text' name="name" placeholder="Task Name" />

                            {
                                errors.name && touched.name &&
                                    (<ErrorMessage name='name'/>)
                                
                            }

                            <label htmlFor="description">Task Description</label>
                            <Field
                            id="description"
                            name="description"
                            placeholder="Task Description"
                            type="text"
                            />

                            {
                                errors.description && touched.description &&
                                    (<ErrorMessage name='description'/>)
                            }

                            <label htmlFor="level">Task Priority</label>
                            <Field as="select" name="level">
                                <option value= {LEVELS.NORMAL}>normal</option>
                                <option value= {LEVELS.URGENT}>urgent</option>
                                <option value= {LEVELS.BLOCKING}>blocking</option>
                            </Field>


                            <button type="submit">Add Task</button>
                            {isSubmitting ? (<p>Adding task...</p>) : null}
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
}

TaskForm2.Prototypes = {
    add: PropTypes.func.isRequiered,
    length: PropTypes.number.isRequired,
}

export default TaskForm2;
