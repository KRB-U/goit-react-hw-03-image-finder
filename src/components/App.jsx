// завершив на передачі шуканого із state в ImageGallery

import { Component } from 'react';
import { ModalFrame } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './ButtonLoadMore/ButtonLoadMore.styled';

//NOTIFY
import toast, { Toaster } from 'react-hot-toast';

// STYLED
// import { ContainerApp } from './layer';

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
        {/* завершив на передачі шуканого із state в ImageGallery */}

        <ImageGallery searchQuery={this.state.queryValue}></ImageGallery>
        <BtnLoadMore></BtnLoadMore>

        {showModal && <ModalFrame></ModalFrame>}
        <Toaster
          toastOptions={{
            className: '',
            duration: 1000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        ></Toaster>
      </div>
    );
  }
}
