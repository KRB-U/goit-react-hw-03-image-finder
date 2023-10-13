import { Overlay, ImageContainer } from './Modal.styled';

const ModalFrame = () => {
  return (
    <>
      <Overlay>
        <ImageContainer>
          {/* {children} */}
          <img src="" alt="" />
        </ImageContainer>
      </Overlay>
    </>
  );
};

export { ModalFrame };
