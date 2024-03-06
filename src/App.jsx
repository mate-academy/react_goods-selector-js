import 'bulma/css/bulma.css';
import './App.scss';
// import { use } from 'chai';
import { useState } from 'react';
// import { set } from 'cypress/types/lodash';

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

const classNames = require('classnames');

const DEFAULT_GOOD = goods.find(good => good === 'Jam');

export const App = () => {
  const [chosenProduct, setGood] = useState(DEFAULT_GOOD);

  return (
    <main className="section container">
      <h1
        className={classNames('title', {
          'is-flex is-align-items-center': chosenProduct,
        })}
      >
        {chosenProduct ? `${chosenProduct} is selected` : 'No goods selected'}
        {chosenProduct && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': good === chosenProduct,
                })}
                key={good}
              >
                <td>
                  <button
                    data-cy={`${chosenProduct === good ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={classNames('button', {
                      'is-info': chosenProduct === good,
                    })}
                    onClick={() => {
                      if (good === chosenProduct) {
                        setGood('');
                      } else {
                        setGood(good);
                      }
                    }}
                  >
                    {chosenProduct === good ? '-' : '+'}
                  </button>
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
