import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

  const handleClick = good => {
    if (good === selectedGood) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  const reset = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood.length === 0 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': good === selectedGood,
              })}
            >
              <td>
                {good === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className={classNames('button', {
                      'is-info': good === selectedGood,
                    })}
                    onClick={() => {
                      handleClick(good);
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      handleClick(good);
                    }}
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
