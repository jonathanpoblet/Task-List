import React from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Formik, Form, Field ,ErrorMessage } from 'formik';
import '../../../styles/task.scss'
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


const TaskForm2 = ({ add }) => {


    const initialValues = {
        name:'',
        description:'',
        completed: false,
        level: LEVELS.NORMAL
    }

    return (
        <div>
            <h4 className='addTask'>Add Task</h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={ formTaskSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setInterval(r,1000));
                    add(values);
                }}
            >

                {props => {
                    const  {
                        touched,
                        errors,
                        isSubmitting,
                    } = props;

                    return(
                       <Form style={{ display:'flex',flexDirection:'column' }} className='form'>
                            <div>
                                <Field id="name" type='text' name="name" placeholder="Task Name" className='input' />

                                <Field
                                id="description"
                                name="description"
                                placeholder="Task Description"
                                type="text"
                                className='input'
                                />



                                <Field as="select" name="level" className='input'>
                                    <option value= {LEVELS.NORMAL}>normal</option>
                                    <option value= {LEVELS.URGENT}>urgent</option>
                                    <option value= {LEVELS.BLOCKING}>blocking</option>
                                </Field>
                            </div>

                            {
                                errors.name && touched.name &&
                                    (<ErrorMessage name='name'/>)
                                
                            }
                            <br/>
                            {
                                errors.description && touched.description &&
                                    (<ErrorMessage name='description'/>)
                            }

                            <button className='addTaskButton' type="submit">Add Task</button>
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
