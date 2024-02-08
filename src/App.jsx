import 'bulma/css/bulma.css';
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
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods ? (
          <>
            {selectedGoods}
            {' '}
            is selected
          </>
        ) : (
          'No goods selected'
        )}
        {selectedGoods && (
          <button
            data-cy="ClearButton"
            onClick={() => {
              setSelectedGoods('');
            }}
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGoods === good
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                {selectedGoods === good ? (
                  <button
                    data-cy="RemoveButton"
                    onClick={() => {
                      setSelectedGoods('');
                    }}
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    onClick={() => {
                      setSelectedGoods(good);
                    }}
                    type="button"
                    className="button"
                  >
                    +
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
