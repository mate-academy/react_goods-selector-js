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

const SelectedGoods = ({ selectedGood, onClear }) => {
  if (!selectedGood) {
    return (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );
  }

  return (
    <h1 className="title is-flex is-align-items-center">
      {selectedGood} is selected
      <button
        onClick={onClear}
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
      />
    </h1>
  );
};

const Good = ({ good, isSelected, onSelect }) => {
  const buttonText = isSelected ? '-' : '+';
  const buttonClass = isSelected ? 'is-info' : '';
  const buttonCy = isSelected ? 'RemoveButton' : 'AddButton';
  const goodBackground = isSelected ? 'has-background-success-light' : '';

  return (
    <tbody>
      <tr data-cy="Good" className={goodBackground}>
        <td>
          <button
            onClick={() => {
              const value = isSelected ? '' : good;

              onSelect(value);
            }}
            data-cy={buttonCy}
            type="button"
            className={`button ${buttonClass}`}
          >
            {buttonText}
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    </tbody>
  );
};

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <SelectedGoods selectedGood={selectedGood} onClear={clearSelection} />

      <table className="table">
        {goods.map(good => (
          <Good
            good={good}
            key={good}
            isSelected={good === selectedGood}
            onSelect={setSelectedGood}
          />
        ))}
      </table>
    </main>
  );
};
