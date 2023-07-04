/* eslint-disable no-console */
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
  const [isSelected, setIsSelected] = useState(true);

  const checkSelectingGood = (row) => {
    if (isSelected) {
      const selected = document.querySelector(
        '.has-background-success-light',
      );

      if (selected !== row) {
        const button = selected.querySelector('.button');

        selected.classList.remove(
          'has-background-success-light',
        );
        button.innerText = '+';
        button.dataset.cy = 'AddButton';
        button.classList.remove('is-info');
      }
    }
  };

  const selectItem = (e) => {
    const row = e.target.closest('tr');
    const button = e.currentTarget;

    if (!row) {
      return;
    }

    checkSelectingGood(row);
    const goodInnerText = row.querySelector('[data-cy="GoodTitle"]').innerText;

    row.classList.toggle('has-background-success-light');
    console.log(isSelected);

    if (row.classList.contains('has-background-success-light')) {
      button.innerText = '-';
      button.dataset.cy = 'RemoveButton';
      button.classList.add('is-info');
      setSelectedGood(goodInnerText);
      setIsSelected(true);
    } else {
      button.innerText = '+';
      button.dataset.cy = 'AddButton';
      button.classList.remove('is-info');
      setSelectedGood('');
      setIsSelected(false);
    }
  };

  const deselectItem = () => {
    setSelectedGood('');
    if (isSelected) {
      const selected = document.querySelector(
        '.has-background-success-light',
      );
      const button = selected.querySelector('.button');

      console.log(selected);

      selected.classList.remove(
        'has-background-success-light',
      );
      button.innerText = '+';
      button.dataset.cy = 'AddButton';
      button.classList.remove('is-info');
      setIsSelected(false);
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
          onClick={deselectItem}
        />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={`${goods.indexOf(good)}`}
              className={cn({
                'has-background-success-light': good === 'Jam',
              })}
            >
              <td>
                <button
                  data-cy={good === 'Jam' ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn(
                    'button',
                    {
                      'is-info': good === 'Jam',
                    },
                  )}
                  onClick={selectItem}
                >
                  {good === 'Jam' ? '-' : '+'}
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
