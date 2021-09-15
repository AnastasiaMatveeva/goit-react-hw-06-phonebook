import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './phonebook-types'
import actions from './phonebook-actions'


const contacts = createReducer([],{
    [actions.createContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => 
    state.filter(contact => contact.id !== payload),
})

// const contacts = (state = [], {type, payload}) => {

//     switch(type) {
//         case types.CREATE:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload)
//         default:  
//             return state;  
//     }
    
// }
// const filter = (state = '', {type, payload}) => {
    
//     switch(type) {
//         case types.CHANGE_FILTER:
//             return payload;
//         default:
//             return state;
//     }
    
// }

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})
// const filter = (state = '', {type, payload}) => {
    
//     switch(type) {
//         case 'phonebook/changeFilter':
//             return payload;
//         default:
//             return state;
//     }
    
// }
export default combineReducers({
    contacts, 
    filter
})