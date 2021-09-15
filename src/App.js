import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({
  //       contacts: parsedContacts,
  //     });
  //   }
  // }
  // componentDidUpdate(prevState) {
  //   console.log('component did update');
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('обновилось поле todo');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  changeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  // createContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const isContactExist = contacts.find(contact => contact.name === name);
  //   if (isContactExist) {
  //     alert(`${name} is already exist in contacts`);
  //     return;
  //   }
  //   const id = uuidv4();
  //   const newContact = {
  //     name,
  //     number,
  //     id: id,
  //   };
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  render() {
   

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />

        <div>
          <h1>Contacts</h1>
          <Filter/>
          <ContactList

          />
        </div>
      </>
    );
  }
}

export default App;
