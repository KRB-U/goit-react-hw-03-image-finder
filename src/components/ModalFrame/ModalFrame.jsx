import { Overlay, ImageContainer } from './Modal.styled';

const ModalFrame = ({ largeImageURL, tags, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose}>
        <ImageContainer>
          <img src={largeImageURL} alt={tags} />
        </ImageContainer>
      </Overlay>
    </>
  );
};

export { ModalFrame };
