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
  const [selectedGood, setProduct] = useState('Jam');
  let productLabel = null;

  if (!selectedGood) {
    productLabel = (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );
  } else {
    productLabel = (
      <h1 className="title is-flex is-align-items-center">
        {selectedGood} is selected
        <button
          onClick={() => setProduct('')}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>
    );
  }

  return (
    <main className="section container">
      {productLabel}

      <table className="table">
        <tbody>
          {goods.map(good => {
            let buttonLabel = null;

            if (good === selectedGood) {
              buttonLabel = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={() => setProduct('')}
                >
                  -
                </button>
              );
            } else {
              buttonLabel = (
                <button
                  onClick={() => setProduct(good)}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              );
            }

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': good === selectedGood,
                })}
              >
                <td>{buttonLabel}</td>

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
