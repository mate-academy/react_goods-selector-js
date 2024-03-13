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
  const [selectedGood, setselectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setselectedGood(null)}
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({ 'has-background-success-light': isActive })}
              >
                <td>
                  <button
                    data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'button is-info': isActive })}
                    onClick={() => setselectedGood(isActive ? null : good)}
                  >
                    {isActive ? '-' : '+'}
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
