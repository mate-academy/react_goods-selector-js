import { Good } from '../Good/Good';

export const Table = ({ goods, handleSelect, selectedGood, handleDelete }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <Good
          good={good}
          key={good}
          handleSelect={handleSelect}
          isSelected={selectedGood === good}
          handleDelete={handleDelete}
        />
      ))
      }
    </tbody>
  </table>
);
