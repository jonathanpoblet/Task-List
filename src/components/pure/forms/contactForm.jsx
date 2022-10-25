import React, { useRef } from 'react';
import { ContactClass } from '../../../models/contactClass';


const ContactForm = ({ addContact }) => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();

    function add(e) {
        e.preventDefault();
        const newContact = new ContactClass(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false,
        );
        addContact(newContact)
    }

    return (
        <div>
            <form onSubmit={ add }>
                <input ref={nameRef} type='text' placeholder='name'/>
                <input ref={surnameRef} type='text' placeholder='surname'/>
                <input ref={emailRef} type='text' placeholder='email'/> 
                <button type='submit' onClick={ add }>Add contact</button>
            </form>
        </div>
    );
}

export default ContactForm;
