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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isGoodSelected = good => good === selectedGood;

  const deletGood = (currGood, goodOnClick) => {
    if (currGood === goodOnClick) {
      return '';
    }

    return goodOnClick;
  };

  return (
    <main className="section container">

      {!selectedGood.length ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={() => {
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3 RemoveButton"
          />
        </h1>
      )}

      <table className="table">
        {goods.map(good => (
          <tbody key={good}>
            <tr
              data-cy="Good"
              className={
                isGoodSelected(good) ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  onClick={() => {
                    setSelectedGood(deletGood(selectedGood, good));
                  }}
                  data-cy={
                    isGoodSelected(good) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={`button ${isGoodSelected(good) ? 'is-info' : ''}`}
                >
                  {isGoodSelected(good) ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
};
