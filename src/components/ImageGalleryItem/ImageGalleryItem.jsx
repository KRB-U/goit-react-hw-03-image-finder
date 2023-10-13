import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <ImageGalleryItemLi key={id}>
      <ImageGalleryItemImage src={webformatURL} alt="gallery-item" />
    </ImageGalleryItemLi>
  );
};
