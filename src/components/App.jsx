import { Component } from 'react';
import { ModalFrame } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    showModal: false,
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

  handleSubmit = evt => {
    evt.preventDefault();
  };

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.toggleModal();
    }
  };

  //пишу в state value із інпута Search, тре на бекенд
  setSearchToState = value => {
    this.setState({ search: value });
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
        {/* Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми */}
        <Searchbar onSubmit={{}}></Searchbar>
        <button type="button" onClick={this.togleModal}>
          Open
        </button>
        <ImageGallery></ImageGallery>
        {showModal && <ModalFrame></ModalFrame>}
      </div>
    );
  }
}
