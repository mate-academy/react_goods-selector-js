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

const goodsList = goods.map(good => ({
  title: good,
}));

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsList.map(good => (
            <tr
              key={good.title}
              data-cy="Good"
              className={
                good.title === selectedGood
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                {good.title === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good.title)}
                  >
                    +
                  </button>
                )}{' '}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
