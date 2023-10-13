import { Component } from 'react';
import { ModalFrame } from './ModalFrame/ModalFrame';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

// HELPERS
import { searchItem } from '../helpers/API';

//NOTIFY
import toast, { Toaster } from 'react-hot-toast';

// STYLED
import { ContainerApp } from './Layer/Layer';
import { RotatingLines } from 'react-loader-spinner';

export class App extends Component {
  state = {
    fetchedImages: [],

    showModal: false,
    largeImageURL: null,
    tags: null,

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
    if (
      prevState.queryValue !== this.state.queryValue ||
      prevState.currentPage !== this.state.currentPage
    ) {
      try {
        this.setState({ loading: true, error: false });

        const { currentPage, queryValue } = this.state;

        const images = await searchItem(currentPage, queryValue);
        // console.log(images);
        this.setState(prevState => ({
          fetchedImages: [...prevState.fetchedImages, ...images.hits],
        }));

        // if (this.state.fetchedImages.length === 0) {
        //   return toast.error('нічого не знайдено!');
        // }
      } catch (err) {
        this.setState({ error: true });
        toast.error('Помилка');
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

  handleFormSubmit = queryValue => {
    this.setState({
      queryValue: queryValue,
      fetchedImages: [],
      currentPage: 1,
    });
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

  handleImageClick = (largeImageURL, tags) => {
    this.setState({
      largeImageURL: largeImageURL,
      tags: tags,
      showModal: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { fetchedImages, showModal, loading, error, largeImageURL, tags } =
      this.state;
    return (
      <ContainerApp>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {loading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="0.5"
            width="50"
            visible={true}
          />
        )}
        {error && <p>We have error</p>}

        <ImageGallery
          items={fetchedImages}
          onClickImage={this.handleImageClick}
        />

        {/* кнопку рендерим коли page > 1 або масив > 0 */}
        <ButtonLoadMore onClick={this.handleLoadMore} />

        {showModal && (
          <ModalFrame
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
        <Toaster
          toastOptions={{
            className: '',
            duration: 1000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </ContainerApp>
    );
  }
}
