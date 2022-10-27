import React from 'react';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const RegisterFormik = () => {

    let USER = new User();

    const initialValues = {
        username: '',
        email:'',
        password:'',
        confirm:'',
        role: ROLES.USER,

    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6,'Username too short')
                .max(12,'Username too long')
                .required('Username is required'),
            email : Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN],
                        'You must select a Role: User/Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8,'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                //Cuando la contraseña esta completada
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match!'
                    )
                })
                .required('Confirm is required')
                
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={ registerSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setInterval(r,1000));
                    alert(JSON.stringify(values,null,2));
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
                       <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type='text' name="username" placeholder="Username" />
                            
                            {
                                errors.username && touched.username &&
                                    (<ErrorMessage name='username'/>)
                                
                            }
                            
                            
                            <label htmlFor="email">Email</label>
                            <Field id="email" type='email' name="email" placeholder="example@hotmail.com" />

                            <label htmlFor="password">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="jane@acme.com"
                            type="password"
                            />

                            {
                                errors.password && touched.password &&
                                    (<ErrorMessage name='password'/>)
                            }

                            <label htmlFor="confirm">Confirm Password</label>
                            <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm password"
                            type="password"
                            />

                            {
                                errors.confirm && touched.confirm &&
                                    (<ErrorMessage name='confirm'/>)
                            }
                            
                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                        </Form>
                    )
                }}


            </Formik>
        </div>
    );
}

export default RegisterFormik;
