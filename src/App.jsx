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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClick = (item) => {
    setSelectedGood(item);
  };

  const handleGoodSelected = item => (
    <tr
      key={item}
      data-cy="Good"
      className="has-background-success-light"
    >
      <td>
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => handleClick(null)}
        >
          -
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {item}
      </td>
    </tr>
  );

  const goodDefault = item => (
    <tr
      key={item}
      data-cy="Good"
    >
      <td>
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={() => handleClick(item)}
        >
          +
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {item}
      </td>
    </tr>
  );

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleClick(null)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(goodItem => (
            goodItem === selectedGood
              ? handleGoodSelected(goodItem)
              : goodDefault(goodItem)
          ))}
        </tbody>
      </table>
    </main>
  );
};
