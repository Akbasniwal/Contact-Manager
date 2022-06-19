import React,{ useState , useEffect} from "react"; 
import uuid from 'react-uuid';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

export default function App() {
	const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);

  const isFound = (contact) => {
  	for(let i=0;i<contacts.length;i++){
  		if(contacts[i].email===contact.email) return true;
  	}
  	return false;
  }
  const addContactHandler = (contact) => {
  	if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(contact.email)===false){
    	alert('Enter valid email');
    	return;
    }
    if(isFound(contact)){
    	alert('This Email is already in contacts');
    	return;
    }
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}