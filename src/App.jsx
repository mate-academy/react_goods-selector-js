import 'bulma/css/bulma.css';
import cn from 'classnames';
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

  function goodClick(good) {
    return setSelectedGood(selectedGood === good ? '' : good);
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )
      }

      <table className="table">
        <tbody>

          {goods.map((good) => {
            const selected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  selected ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    onClick={
                      () => goodClick(good)
                    }
                    data-cy={
                      selected ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={cn('button', {
                      'is-info button': selected,
                    })
                    }
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
