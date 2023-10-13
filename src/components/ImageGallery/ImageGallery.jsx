import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// STYLED
import { ImageGalleryUl } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryUl>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />
        );
      })}
    </ImageGalleryUl>
  );
};

export { ImageGallery };
