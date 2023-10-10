import { Component } from 'react';
import { ModalWindow } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

// componentDidMount(){
// window.addEventListener('keydown', this.handleKeyDown);
// }

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.handleKeyDown);
// }

// handleKeyDown = (evt) => {
// if (evt.code === 'ESCAPE') {
//     this.pros.togleModal();
//   }
// }

export class App extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
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
        <ImageGalleryItem></ImageGalleryItem>
        {showModal && <ModalWindow></ModalWindow>}
      </div>
    );
  }
}
