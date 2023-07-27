import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Wrapper, H1, H2 } from './App.styled';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';

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
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
        // <Wrapper>
        //     <H1>Phonebook</H1>
        //     <ContactForm />

        //     <H2>Contacts</H2>
        //     <Filter />

        //     <ContactList vilibleContact={vilibleContact} />
        // </Wrapper>
    );
};
