import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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

  const checkSelectingGood = (row) => {
    if (selectedGood) {
      const selected = document.querySelector(
        '.has-background-success-light',
      );

      if (selected !== row) {
        selected.classList.remove(
          'has-background-success-light',
        );
      }
    }
  };

  const selectItem = (e) => {
    const row = e.target.closest('tr');

    if (!row) {
      return;
    }

    checkSelectingGood(row);
    const goodInnerText = row.querySelector('[data-cy="GoodTitle"]').innerText;

    row.classList.toggle('has-background-success-light');

    if (row.classList.contains('has-background-success-light')) {
      setSelectedGood(goodInnerText);
    } else {
      setSelectedGood('');
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'
          }

        {selectedGood && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setSelectedGood('');
          }}
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
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn(
                    'button',
                    {
                      'is-info': selectedGood === good,
                    },
                  )}
                  onClick={selectItem}
                >
                  {selectedGood === good ? '-' : '+'}
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
