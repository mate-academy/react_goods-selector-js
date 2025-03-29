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
  const [selectGood, setSelectGood] = useState('Jam');

  const toggleGoodSelection = good => {
    if (selectGood === good) {
      setSelectGood('');
    } else {
      setSelectGood(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectGood ? `${selectGood} is selected` : 'No goods selected'}
        {selectGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectGood === good ? 'button is-info' : 'button'}
                  onClick={() => toggleGoodSelection(good)}
                >
                  {selectGood === good ? '-' : '+'}
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
