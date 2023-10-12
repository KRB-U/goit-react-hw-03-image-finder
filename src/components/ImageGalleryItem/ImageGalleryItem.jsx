import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImage src={webformatURL} alt="gallery-item" />
    </ImageGalleryItemLi>
  );
};
