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

  function clearGood() {
    setSelectedGood('');
  }

  const selectedGoodMessage = selectedGood ? (
    <h1 className="title is-flex is-align-items-center">
      {selectedGood} is selected
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={clearGood}
      />
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  function getGoodAction(good) {
    if (selectedGood === good) {
      return (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={clearGood}
        >
          -
        </button>
      );
    }

    return (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => setSelectedGood(good)}
      >
        +
      </button>
    );
  }

  function getGoodInfo(good) {
    return (
      <tr
        key={good}
        data-cy="Good"
        className={selectedGood === good ? 'has-background-success-light' : ''}
      >
        <td>{getGoodAction(good)}</td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    );
  }

  return (
    <main className="section container">
      {selectedGoodMessage}

      <table className="table">
        <tbody>{goods.map(item => getGoodInfo(item))}</tbody>
      </table>
    </main>
  );
};
