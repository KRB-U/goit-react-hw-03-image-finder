import Modal from 'react-modal';
import { Overlay, ModalWin } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '200px',
    bottom: '300px',
    marginRight: '0',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = () => {
  return (
    <Modal
      isOpen={true}
      // isOpen={modalIsOpen}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Overlay>
        <ModalWin>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            nostrum dolor omnis quam minus magni reiciendis adipisci cupiditate
            sapiente architecto vero iusto dolore, error nihil, ut illum
            perferendis distinctio culpa, aliquid consectetur tenetur alias.
            Nemo voluptate sequi doloremque et eos dolorem, est sunt. Facere ab
            quidem expedita sit magnam voluptates?
          </p>
          <img src="" alt="" />
        </ModalWin>
      </Overlay>
    </Modal>
  );
};
