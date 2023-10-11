import { Component } from 'react';

//NOTIFY
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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
      return NotificationManager.error('Ведіть пошуковий запит!');
    }

    this.props.onSubmit(this.state.queryValue);
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleQuerySearch}
            // value={this.state.queryValue}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
