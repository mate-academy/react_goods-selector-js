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
  const [goodValue, setGoodValue] = useState('Jam');
  const headerClassNoGoods = classNames('title is-flex is-align-items-center', {
    'is-hidden': goodValue !== '',
  });
  const headerClassWithGood
    = classNames('title is-flex is-align-items-center', {
      'is-hidden': goodValue === '',
    });

  return (
    <main className="section container">
      <h1 className={headerClassNoGoods}>No goods selected</h1>

      <h1 className={headerClassWithGood}>
        {goodValue + ' is selected'}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setGoodValue('');
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const buttonClass = classNames('button', {
              'is-info': goodValue === good,
            });
            const activeElementClass = classNames('', {
              'has-background-success-light': goodValue === good,
            });

            return (
              <tr
                data-cy="Good"
                key={good}
                className={activeElementClass}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={buttonClass}
                    onClick={() => {
                      setGoodValue(goodValue !== good ? good : '');
                    }}
                  >
                    {goodValue === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </main>
  );
};
