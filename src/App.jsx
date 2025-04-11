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

function Item({ item, selectedGood, setGood }) {
  const isSelectedItem = item === selectedGood;
  const button = isSelectedItem ? (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={() => setGood('')}
    >
      -
    </button>
  ) : (
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={() => setGood(item)}
    >
      +
    </button>
  );

  return (
    <tr
      data-cy="Good"
      className={`${isSelectedItem ? 'has-background-success-light' : null}`}
    >
      <td>{button}</td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {item}
      </td>
    </tr>
  );
}

export function App() {
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood !== '' ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item, index) => (
            <Item
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item={item}
              selectedGood={selectedGood}
              setGood={setGood}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
