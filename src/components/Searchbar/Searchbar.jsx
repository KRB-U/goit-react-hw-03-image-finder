import { Component } from 'react';
// import { FaBeer } from 'react-icons/fa';

//NOTIFY
import toast from 'react-hot-toast';

//CSS
import {
  SearchbarStd,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    queryValue: '',
  };

  handleQuerySearch = evt => {
    this.setState({ queryValue: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.queryValue.trim() === '') {
      return toast.error('Ведіть пошуковий запит!');
    }

    this.props.onSubmit(this.state.queryValue);
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <SearchbarStd>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleQuerySearch}
            // value={this.state.queryValue}
          />
        </SearchForm>
      </SearchbarStd>
    );
  }
}

export { Searchbar };
