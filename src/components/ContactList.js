import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // accessing the props and we have received the data.
    console.log(props);

    // how to render the list using funtion and rendering 
    // we are going to take props of the contacts and render them using array map method.
    const renderContactList = props.contacts.map((contact) => {
        // return jsx element 
        return <ContactCard contact = {contact}></ContactCard>
    });

    //reference the render list as reference variable in jsx 
    return <div className = "ui celled list">{renderContactList}</div>
};

export default ContactList;