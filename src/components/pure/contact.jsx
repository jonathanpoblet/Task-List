import React from 'react';

const Contact = ({ contact, changeConected, deleteContact }) => {

    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h3>
                Surname: { contact.surname }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h4>
                Conected:
                {
                    contact.conected ? 
                    'Contact online' 
                    :
                    'Contact offline'
                }
            </h4>
            <button onClick={() => changeConected(contact)}>
                Change conected
            </button>
            <button onClick={() => deleteContact(contact)}>
                Delete Contact
            </button>
        </div>
    );
}

export default Contact;
