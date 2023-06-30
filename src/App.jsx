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

  const togleSelectedGood = (good) => {
    setSelectedGood(
      selectedGood !== good
        ? good
        : '',
    );
  };

  const isSelected = good => selectedGood === good;

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        { !selectedGood
          ? ('No goods selected')
          : `${selectedGood} is selected`
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
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': isSelected(good),
              })}
            >
              <td>
                <button
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': isSelected(good),
                  })}
                  onClick={() => {
                    togleSelectedGood(good);
                  }}
                >
                  {!isSelected(good) ? '+' : '-'}
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
