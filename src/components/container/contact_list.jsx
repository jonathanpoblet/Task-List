import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const contact1 = new Contact("Elon","Musk","elonmusk@hotmail.com",false);

    return (
        <div>
            <div>
                <h1>
                    Your Contacts: 
                </h1>
            </div>
            <ContactComponent contact={contact1}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
