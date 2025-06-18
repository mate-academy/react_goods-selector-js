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
  let heading;

  if (product) {
    heading = (
      <h1 className="title is-flex is-align-items-center">
        {product} is selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setProduct(null)}
        />
      </h1>
    );
  } else {
    heading = (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );
  }

  return (
    <main className="section container">
      {heading}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === product,
              })}
            >
              <td>
                <button
                  data-cy={good === product ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', { 'is-info': good === product })}
                  onClick={() => setProduct(product === good ? null : good)}
                >
                  {good === product ? '-' : '+'}
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
