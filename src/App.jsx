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
  const NO_GOODS_SELECTED = 'No goods';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product}
        {product !== NO_GOODS_SELECTED
          ? ' is '
          : ' '
        }
        selected

        {product !== NO_GOODS_SELECTED && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setProduct(NO_GOODS_SELECTED)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            let isSelected = product === good;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames({
                      button: true,
                      'is-info': isSelected,
                    })}
                    onClick={() => {
                      isSelected = !isSelected;

                      setProduct(product !== good
                        ? good
                        : NO_GOODS_SELECTED);
                    }}
                  >
                    {isSelected ? '-' : '+'}
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
