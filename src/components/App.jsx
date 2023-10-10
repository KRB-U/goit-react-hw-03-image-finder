import { Component } from 'react';
import { ModalWindow } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {/* Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми */}
        <Searchbar onSubmit={{}}></Searchbar>
        {showModal && <ModalWindow></ModalWindow>}
      </div>
    );
  }
}
