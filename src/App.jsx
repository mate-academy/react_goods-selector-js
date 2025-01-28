import { useState } from 'react';
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
  const [product, setProduct] = useState('Jam');
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? 'No goods selected' : ''}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? '' : `${product} is selected`}
        {selectedGood !== '' && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={good === product && 'has-background-success-light'}
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    key={good}
                    data-cy="AddButton"
                    type="button"
                    onClick={() => {
                      setProduct(good);
                      setSelectedGood(good);
                    }}
                    className="button"
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGood('')}
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                  />
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
