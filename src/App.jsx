import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  const [good, setGood] = useState('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good === '' ? `No goods selected` : `${good} is selected`}
        {good === '' ? (
          ''
        ) : (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => (
            <tr
              key={product}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': product === good,
              })}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className={classNames({
                    button: true,
                    'is-info': product === good,
                  })}
                  onClick={() => {
                    setGood(product);
                  }}
                >
                  {product === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {product}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
