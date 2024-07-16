import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';
import cn from 'classnames';

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

  function displayAddButton(good) {
    if (good === selectedGood) {
      return (
        <button
          onClick={() => setSelectedGood(null)}
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
        >
          -
        </button>
      );
    }

    return (
      <button
        onClick={() => setSelectedGood(good)}
        data-cy="AddButton"
        type="button"
        className="button"
      >
        +
      </button>
    );
  }

  function displaySelectedGood() {
    if (selectedGood) {
      return (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={() => setSelectedGood(null)}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      );
    }

    return (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );
  }

  return (
    <main className="section container">
      {displaySelectedGood()}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': good === selectedGood,
              })}
            >
              <td>{displayAddButton(good)}</td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
