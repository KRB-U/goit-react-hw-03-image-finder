import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  console.log(webformatURL);
  return (
    <ImageGalleryItemLi key={id}>
      <ImageGalleryItemImage src={webformatURL} alt="gallery-item" />
    </ImageGalleryItemLi>
  );
};
