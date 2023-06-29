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

  const heading = (
    <h1 className="title is-flex is-align-items-center">
      {selectedGood
        ? `${selectedGood} is selected`
        : 'No goods selected'
      }

      {selectedGood
        && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
    </h1>
  );

  function handleGoodClick(currentGood) {
    if (currentGood === selectedGood) {
      setSelectedGood('');
    } else {
      setSelectedGood(currentGood);
    }
  }

  const goodsList = goods.map(good => (
    <tr
      key={good}
      data-cy="Good"
      className={cn({
        'has-background-success-light': good === selectedGood,
      })}
    >
      <td>
        <button
          data-cy={good === selectedGood
            ? 'RemoveButton'
            : 'AddButton'
          }
          onClick={() => handleGoodClick(good)}
          type="button"
          className={cn('button', {
            'is-info': good === selectedGood,
          })}
        >
          {good === selectedGood ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  ));

  return (
    <main className="section container">
      {heading}

      <table className="table">
        <tbody>
          {goodsList}
        </tbody>
      </table>
    </main>
  );
};
