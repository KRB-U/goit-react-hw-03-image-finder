import Modal from 'react-modal';
import { Overlay, ImageContainer } from './Modal.styled';

// const customStyles = {
//   content: {
//     top: '40%',
//     left: '40%',
//     right: '50px',
//     bottom: '20px',
//     marginRight: '0',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root');

export const ModalWindow = () => {
  return (
    <Modal
      isOpen={true}
      // isOpen={modalIsOpen}
      // onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
    >
      <Overlay>
        <ImageContainer>
          {/* {this.props.children} */}
          <img src="" alt="" />
        </ImageContainer>
      </Overlay>
    </Modal>
  );
};
