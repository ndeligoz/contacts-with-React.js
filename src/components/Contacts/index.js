import React, { useEffect, useState } from 'react';
import "./style.css";
import List from "./list";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Cemre",
            phone_number: "123123"
        }, {
            fullname: "Tunahan",
            phone_number: "456456"
        }, {
            fullname: "Binnur",
            phone_number: "789789"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
    return <div id="container">
        <h1>Contacts</h1>
        < List contacts={contacts} />
        < Form addContacts={setContacts} contacts={contacts} />
    </div>

}

export default Contacts;