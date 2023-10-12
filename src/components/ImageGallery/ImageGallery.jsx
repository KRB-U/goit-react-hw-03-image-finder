import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// STYLED
import { ImageGalleryUl } from './ImageGallery.styled';

const ImageGallery = () => {
  // console.log(this.props.searchQuery);

  return (
    <ImageGalleryUl>
      {this.props.items.map(item => {
        <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />;
      })}
      {/* <ImageGalleryItem></ImageGalleryItem> */}
    </ImageGalleryUl>
  );
};

export { ImageGallery };
