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
      {!product ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${product} is selected`}

            <button
              onClick={() => {
                setProduct('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': isEqual(good, product),
              })}
            >
              <td>
                <button
                  onClick={() => {
                    setProduct(chooseProduct(good, product));
                  }}
                  data-cy={isEqual(good, product)
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': isEqual(good, product),
                  })}
                >
                  {isEqual(good, product)
                    ? '-'
                    : '+'}
                </button>
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

const isEqual = (thisValue, getValue) => getValue === thisValue;

const chooseProduct = (thisValue, getValue) => {
  if (!isEqual(thisValue, getValue)) {
    return thisValue;
  }

  return '';
};
