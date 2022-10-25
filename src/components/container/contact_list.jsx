import React, {useState} from 'react';
import Contact from '../pure/contact';
import { ContactClass } from '../../models/contactClass';
import ContactForm from '../pure/forms/contactForm';

const ContactList = () => {

    const exampleContact = new ContactClass ('Jonathan', 'Poblet', 'jonathanpoblet@hotmail.com', false)
    const exampleContact2 = new ContactClass ('Dante', 'Poblet', 'dantepoblet@hotmail.com', true)
    const exampleContact3 = new ContactClass ('Andrea', 'Carrizo', 'andreacarrizo@hotmail.com', false)


    const [contact, setContact] = useState([ exampleContact,exampleContact2,exampleContact3 ]);

    const changeConected = (conta) => {
        const index = contact.indexOf(conta);
        const tempTasks = [...contact];
        tempTasks[index].conected = !tempTasks[index].conected;
        setContact(tempTasks);
    }

    function addContact (conta) {
        const tempTasks = [...contact];
        tempTasks.push(conta)
        setContact(tempTasks);
    }
    
    function deleteContact(conta) {
        const index = contact.indexOf(conta);
        const tempTasks = [...contact];
        tempTasks.splice(index,1)
        setContact(tempTasks)
    }

    return (
        <div>
            <h1>Your contacts:</h1>
            <div>
                <ContactForm
                    addContact = {addContact}>

                </ContactForm>
            </div>
            {
                contact.map((conta,index) => (
                    <Contact 
                        contact={ conta } 
                        key={index}
                        changeConected = { changeConected }
                        deleteContact = {deleteContact}>
                    </Contact>
                ))
            }

        </div>
    );
}

export default ContactList;
