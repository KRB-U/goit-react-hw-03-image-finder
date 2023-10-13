import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClickImage }) => {
  const { id, webformatURL, largeImageURL, tags } = item;

  const sendImage = () => {
    onClickImage(largeImageURL, tags);
  };

  return (
    <>
      <ImageGalleryItemImage src={webformatURL} alt={id} onClick={sendImage} />
    </>
  );
};

export { ImageGalleryItem };
