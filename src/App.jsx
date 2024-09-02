import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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

  return (
    <main className="section container">
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const selected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': selected })}
                key={good}
              >
                <td>
                  <button
                    data-cy={selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': selected })}
                    onClick={() => setSelectedGood(selected ? '' : good)}
                  >
                    {selected ? '-' : '+'}
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
