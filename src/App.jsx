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

  const selectedGoodMessage = `${
    selectedGood ? `${selectedGood} is selected` : 'No goods selected'
  }`;

  const changeGood = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoodMessage}
        {!!selectedGood.length && (
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
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                <button
                  data-cy={selectedGood !== good ? 'AddButton' : 'RemoveButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': selectedGood === good,
                  })}
                  onClick={() => {
                    if (selectedGood !== good) {
                      changeGood(good);
                    } else {
                      setSelectedGood('');
                    }
                  }}
                >
                  {selectedGood !== good ? '+' : '-'}
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
