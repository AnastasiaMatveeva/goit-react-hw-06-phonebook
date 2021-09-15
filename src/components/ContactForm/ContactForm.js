import React, { Component } from 'react';
import s from './ContactForm.module.css';
import {connect} from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  changeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.contactForm}>
        <label htmlFor="name" className={s.contactForm__label}>
          Name
          <br />
          <input
            type="text"
            className={s.contactForm__input}
            name="name"
            value={this.state.name}
            onChange={this.changeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <br />
        <label htmlFor="number" className={s.contactForm__label}>
          Number
          <br />
          <input
            type="tel"
            className={s.contactForm__input}
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={this.changeInput}
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <br />
        <button type="submit">AddContact</button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onSubmit: ({name, number}) => dispatch(phonebookActions.createContact({name, number}))
})
export default connect(null, mapDispatchToProps)(ContactForm);
