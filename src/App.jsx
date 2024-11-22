import cn from 'classnames';
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

  const resetGood = () => setSelectedGood('');

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            onClick={resetGood}
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActiveBtn = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': isActiveBtn })}
                key={good}
              >
                <td>
                  <button
                    data-cy={isActiveBtn ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isActiveBtn })}
                    onClick={() => {
                      setSelectedGood(isActiveBtn ? '' : good);
                    }}
                  >
                    {isActiveBtn ? '-' : '+'}
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
