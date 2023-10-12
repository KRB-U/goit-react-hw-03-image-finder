// завершив на передачі шуканого із state в ImageGallery

import { Component } from 'react';
import { ModalFrame } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './ButtonLoadMore/ButtonLoadMore.styled';

// HELPERS
import { searchItem } from './helpers/API';

//NOTIFY
import toast, { Toaster } from 'react-hot-toast';

// STYLED
// import { ContainerApp } from './layer';

export class App extends Component {
  state = {
    fetchedImages: [],
    showModal: false,
    queryValue: '',
    currentPage: 1,
    loading: false,
    error: false,
  };

  // async componentDidMount(_, prevState) {
  //   // window.addEventListener('keydown', this.handleKeyDown);
  //   // this.toggleModal();
  // }

  async componentDidUpdate(_, prevState) {
    // this.setState({ loading: true, error: false });

    if (
      prevState.fetchedImages !== this.state.fetchedImages ||
      prevState.currentPage !== this.state.currentPage
    ) {
      try {
        const { currentPage, queryValue } = this.state;

        const images = await searchItem(currentPage, queryValue);
        console.log(images);
        this.setState({ fetchedImages: images });

        // console.log(this.state.fetchedImages);
      } catch (err) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  // handleBackDropClick = evt => {
  //   if (evt.currnetTarget === evt.target) {
  //     this.toggleModal();
  //   }
  // };

  //оновлення state із SearchBar
  handleFormSubmit = queryValue => {
    // console.log(queryValue);
    this.setState({ queryValue });
  };

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.toggleModal();
    }
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  handleLoadMore = () => {
    this.state(prevState => prevState.currentPage + 1);
  };

  render() {
    const { fetchedImages, showModal, loading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>

        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {/* завершив на передачі шуканого із state в ImageGallery */}
        {/* {loading && <p>Loading...</p>} */}
        {/* {error && <p>We have error</p>} */}
        <ImageGallery items={fetchedImages}></ImageGallery>
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
