import PropTypes from 'prop-types';

import {
    ContactListWrapper,
    ContactListItem,
    ContactName,
    ContactButton,
} from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contactsList);
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const vilibleContact = getVisibleContacts();

    return (
        <div>
            <ContactListWrapper>
                {vilibleContact.map(contact => {
                    return (
                        <ContactListItem key={contact.id}>
                            <div>
                                <ContactName>{contact.name}:</ContactName>
                                <p>{contact.number}</p>
                            </div>
                            <ContactButton
                                type="button"
                                onClick={() =>
                                    dispatch(deleteContact(contact.id))
                                }
                            >
                                Delete
                            </ContactButton>
                        </ContactListItem>
                    );
                })}
            </ContactListWrapper>
        </div>
    );
};

ContactList.propTypes = {
    vilibleContact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

export default ContactList;
