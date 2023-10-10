import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <div>
      {/* Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми */}
      <Searchbar onSubmit={{}}></Searchbar>
    </div>
  );
};
