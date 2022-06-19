import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {
	const removeContact = (id) => {
		props.getContactId(id);
	};

	const renderList = props.contacts.map((contact) => {
		return (
			<ContactCard contact={contact} clickHandler={removeContact} key={contact.id}/>
		);
	});

	return (
		<div className="ui celled list">
			{renderList}
		</div>
	);
};

export default ContactList;
