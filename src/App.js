import React, { Component } from "react";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filter/>
        <ContactList/> */}
      </Container>
    );
  }
}

export default App;
