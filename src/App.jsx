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

function Button({ isSelected, onClick }) {
  return (
    <button
      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
      type="button"
      className={`button ${isSelected ? 'is-info' : ''}`}
      onClick={onClick}
    >
      {isSelected ? '-' : '+'}
    </button>
  );
}

function GoodsList({ items, selectedGood, onSelect }) {
  return (
    <>
      {items.map(good => (
        <GoodItem
          key={good}
          good={good}
          selectedGood={selectedGood}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}

function GoodItem({ good, selectedGood, onSelect }) {
  const isSelected = good === selectedGood;

  return (
    <tr
      data-cy="Good"
      className={isSelected ? 'has-background-success-light' : ''}
    >
      <td>
        <Button
          isSelected={isSelected}
          onClick={() => onSelect(isSelected ? null : good)}
        />
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
}

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          <GoodsList
            items={goods}
            selectedGood={selectedGood}
            onSelect={setSelectedGood}
          />
        </tbody>
      </table>
    </main>
  );
};
