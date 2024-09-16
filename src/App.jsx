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
  const [initialValue, setInitialValue] = useState('Jam');
  const removeGoods = () => {
    setInitialValue('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {initialValue ? `${initialValue} is selected` : 'No goods selected'}
        {initialValue && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeGoods}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': initialValue === good,
              })}
            >
              <td>
                {initialValue !== good && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setInitialValue(good)}
                  >
                    +
                  </button>
                )}
                {initialValue === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={removeGoods}
                  >
                    -
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
