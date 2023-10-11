import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <ImageGalleryItemLi className="gallery-item">
      <ImageGalleryItemImage src={webformatURL} alt="gallery-item" />
    </ImageGalleryItemLi>
  );
};
