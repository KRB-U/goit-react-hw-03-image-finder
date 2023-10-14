import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ModalFrame } from './ModalFrame/ModalFrame';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

// SPINER
import { RotatingLines } from 'react-loader-spinner';

// HELPERS
import { searchItem } from '../helpers/API';

//NOTIFY
import toast, { Toaster } from 'react-hot-toast';

// STYLED
import { ContainerApp } from './Layer/Layer';

export class App extends Component {
  state = {
    fetchedImages: [],

    showModal: false,
    largeImageURL: null,
    tags: null,

    queryValue: '',
    currentPage: 1,

    showLoadingMore: false,
    loadMore: false,

    loading: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.queryValue !== this.state.queryValue ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ loading: true, error: false });

      try {
        const { currentPage, queryValue } = this.state;
        // запит із затримкою , впевнитись чи відпрацьовує спінер
        // const delayedSearch = () => {
        //   return new Promise(resolve => {
        //     setTimeout(async () => {
        //       const images = await searchItem(currentPage, queryValue);
        //       resolve(images);
        //     }, 1000);
        //   });
        // };

        // const images = await delayedSearch();
        const images = await searchItem(currentPage, queryValue);
        //
        this.setState(prevState => ({
          fetchedImages: [...prevState.fetchedImages, ...images.hits],
          loadMore: this.state.currentPage < Math.ceil(images.totalHits / 12),
        }));

        const amountImg = images.totalHits;

        if (amountImg === 0) {
          toast.error('нічого не знайдено!');
        }

        if (amountImg > 1 && currentPage === 1) {
          toast.success(`знайдено ${amountImg} результатів`);
        }
      } catch (err) {
        this.setState({ error: true });
        toast.error('Щось пішло не так');
      } finally {
        this.setState({ loading: false, showLoadingMore: false });
      }
    }
  }

  handleFormSubmit = queryValue => {
    this.setState({
      queryValue: queryValue,
      fetchedImages: [],
      currentPage: 1,
    });
  };

  // handleBackDropClick = evt => {
  //   if (evt.currnetTarget === evt.target) {
  //     this.toggleModal();
  //   }
  // };

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
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      showLoadingMore: true,
    }));
  };

  render() {
    const {
      fetchedImages,
      showModal,
      loading,
      error,
      largeImageURL,
      tags,
      loadMore,
      showLoadingMore,
    } = this.state;

    return (
      <ContainerApp>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <RotatingLines />}
        <ImageGallery
          items={fetchedImages}
          onClickImage={this.handleImageClick}
        />
        {showLoadingMore && <RotatingLines />}
        {loadMore && <ButtonLoadMore onClick={this.handleLoadMore} />}

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
            duration: 500,
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
