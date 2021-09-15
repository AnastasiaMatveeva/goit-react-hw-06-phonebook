import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import {connect} from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(item => (
        <li key={item.id} className={s.contactList__item}>
          {item.name}: {item.number}
          <button type="button" onClick={() => onDeleteContact(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (contacts, filter) => {
  const normilizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normilizedFilter),
  );
}

const mapStateToProps = state => {
  const {filter, contacts} = state.contacts;

  const visibleContacts = getVisibleContacts(contacts, filter);

  return {
    contacts: visibleContacts
  }
}

const mapDispatchToProps = disptch => ({
  onDeleteContact: (id) => disptch(phonebookActions.deleteContact(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
