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
  const [value, setValue] = useState('Jam');

  function handleSelectGood(good) {
    setValue(good);
  }

  function handleClearSelection() {
    setValue('');
  }

  function handleRemoveSelection() {
    setValue('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? `${value} is selected` : `No goods selected`}

        {value && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        )}
      </h1>
      <table className="table is-fullwidth">
        <tbody>
          {goods.map(good => {
            const isValue = good === value;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isValue ? 'has-background-success-light' : ''}
              >
                <td>
                  {!isValue && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button is-success is-small"
                      onClick={handleSelectGood.bind(null, good)}
                    >
                      +
                    </button>
                  )}
                  {isValue && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info is-small"
                      onClick={handleRemoveSelection}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};


export default App;
