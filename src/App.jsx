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

  const clear = () => {
    setSelectedGood('');
  };

  const add = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={clear}
        />
        )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={cn(
                {
                  'has-background-success-light': selectedGood === good,
                },
              )}
              data-cy="Good"
            >
              <td>
                {selectedGood !== good
                  ? (
                    <button
                      onClick={() => {
                        add(good);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )
                  : (
                    <button
                      onClick={clear}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  )
                }
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
