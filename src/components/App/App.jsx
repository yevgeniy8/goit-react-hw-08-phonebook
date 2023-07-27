import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Wrapper, H1, H2 } from './App.styled';

import { useSelector } from 'react-redux';

export const App = () => {
    const contacts = useSelector(state => state.contacts.contactsList);
    const filter = useSelector(state => state.filter);

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const vilibleContact = getVisibleContacts();

    return (
        <Wrapper>
            <H1>Phonebook</H1>
            <ContactForm />

            <H2>Contacts</H2>
            <Filter />

            <ContactList vilibleContact={vilibleContact} />
        </Wrapper>
    );
};
