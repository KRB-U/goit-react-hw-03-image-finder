//завершив на передачі шуканого із state в ImageGallery

import { Component } from 'react';
import { ModalFrame } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageGallery } from './ImageGallery/ImageGallery';

//NOTIFY
import { NotificationContainer } from 'react-notifications';

export class App extends Component {
  state = {
    showModal: false,
    queryValue: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.toggleModal();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackDropClick = evt => {
    if (evt.currnetTarget === evt.target) {
      this.toggleModal();
    }
  };

  //оновлення state із SearchBar
  handleFormSubmit = queryValue => {
    this.setState({ queryValue: queryValue });
  };

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        //завершив на передачі шуканого із state в ImageGallery
        <ImageGallery searchQuery={this.state.queryValue}></ImageGallery>
        {showModal && <ModalFrame></ModalFrame>}
        <NotificationContainer />
      </div>
    );
  }
}
