import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
const Filter = ({ value, onChangeInput }) => {
  return (
    <label htmlFor="filter">
      <h2>Filter contact by name</h2>
      <input name="filter" onChange={onChangeInput} value={value} />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
})
const mapDispatchToProps = dispatch => ({
  onChangeInput: e => dispatch(phonebookActions.changeFilter(e.target.value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
