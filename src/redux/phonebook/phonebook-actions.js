import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const createContact = createAction('phonebook/create', ({ name, number }) => ({
        payload: {
            name,
            number,
            id: uuidv4(),
        },
     } ))

// const createContact = ({ name, number }) => ({
//     type: types.CREATE,
//     payload: {
//         name,
//         number,
//         id: uuidv4(),
//     }
// })
const deleteContact = createAction('phonebook/delete')
// const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId
// })

const changeFilter  = createAction('phonebook/changeFilter')
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })
export default {createContact, deleteContact, changeFilter}