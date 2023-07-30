import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Wrapper, H1, H2 } from 'components/App/App.styled';
import { useSelector } from 'react-redux';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts.contactsList);
    const filter = useSelector(state => state.filter);

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const vilibleContact = getVisibleContacts();

    return (
        <div>
            <Wrapper>
                <H1>Phonebook</H1>
                <ContactForm />
                <H2>Contacts</H2>
                <Filter />
                <ContactList vilibleContact={vilibleContact} />
            </Wrapper>
        </div>
    );
};

export default Contacts;
