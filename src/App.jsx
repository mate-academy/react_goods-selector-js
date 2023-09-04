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
  const [product, setProduct] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product === '' ? 'No goods selected' : product}

        {product && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setProduct('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isCurrentGoodSelected = product === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isCurrentGoodSelected,
                })}
              >
                <td>
                  <button
                    data-cy={
                      isCurrentGoodSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames({
                      button: true,
                      'is-info': isCurrentGoodSelected,
                    })}
                    onClick={() => {
                      setProduct(
                        isCurrentGoodSelected ? '' : good,
                      );
                    }}
                  >
                    {isCurrentGoodSelected ? '-' : '+'}
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
