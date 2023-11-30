import { useState } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
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

  const onGoodSelect = (good) => {
    setSelectedGood(good);
  };

  const onClearGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1> */}

      <h1 className="title is-flex is-align-items-center">
        {selectedGood.length === 0
          ? 'No goods selected'
          : (
            <>
              {selectedGood}
              {' '}
              is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={onClearGood}
              />
            </>
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                classNames({
                  'has-background-success-light': selectedGood === good,
                })
              }
            >
              <td>
                {selectedGood === good
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={onClearGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => onGoodSelect(good)}
                    >
                      +
                    </button>
                  )
                }
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
