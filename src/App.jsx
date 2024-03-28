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
  const [good, setGood] = useState(goods[8]);

  const selectGood = item => {
    if (good === item) {
      setGood(null);
    } else {
      setGood(item);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? `${good} is selected` : 'No goods selected'}
        {good && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(curGood => (
            <tr
              data-cy="Good"
              key={curGood}
              className={`${good === curGood ? 'has-background-success-light' : ''}`}
            >
              <td>
                <button
                  onClick={() => selectGood(curGood)}
                  data-cy={`${good === curGood ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`button ${good === curGood ? 'is-info' : ''}`}
                >
                  {good === curGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {curGood}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
