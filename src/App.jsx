import 'bulma/css/bulma.css';
import { useState } from 'react';
import classNames from 'classnames';
import './App.scss';

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
  const title = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';
  const handleSelect = good => {
    setSelectedGood(good);
  };

  const reset = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames(
                selectedGood === good ? 'has-background-success-light' : '',
              )}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={reset}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelect(good)}
                  >
                    +
                  </button>
                )}
              </td>
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
