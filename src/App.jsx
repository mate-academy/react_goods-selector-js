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
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = selectedGood === good;

            return (
              <>
                <tr
                  key={good}
                  data-cy="Good"
                  className={cn('', {
                    'has-background-success-light': isActive,
                  })}
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={cn('button', {
                        'is-info': isActive,
                      })}
                      onClick={() => {
                        setSelectedGood(isActive ? '' : good);
                      }}
                    >
                      {isActive ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
