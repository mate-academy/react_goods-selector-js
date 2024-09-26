import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const GoodsTableRow = ({ good, isSelected, onSelect, onDeselect }) => (
  <tr
    data-cy="Good"
    className={isSelected ? 'has-background-success-light' : ''}
  >
    <td>
      {isSelected ? (
        <RemoveButton onClick={onDeselect} />
      ) : (
        <AddButton onClick={() => onSelect(good)} />
      )}
    </td>
    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);

const AddButton = ({ onClick }) => (
  <button
    data-cy="AddButton"
    type="button"
    className="button"
    onClick={onClick}
  >
    +
  </button>
);

const RemoveButton = ({ onClick }) => (
  <button
    data-cy="RemoveButton"
    type="button"
    className="button is-info"
    onClick={onClick}
  >
    -
  </button>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectGood = good => setSelectedGood(good);
  const handleDeselectGood = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleDeselectGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <GoodsTableRow
              key={good}
              good={good}
              isSelected={selectedGood === good}
              onSelect={handleSelectGood}
              onDeselect={handleDeselectGood}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
