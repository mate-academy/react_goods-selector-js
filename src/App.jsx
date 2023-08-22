import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const selectedGoods = [
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
      {selectedGood === ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setSelectedGood('');
              }}
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {selectedGoods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : null}
                key={good}
              >
                <td>
                  <button
                    data-cy={!isSelected ? 'AddButton' : 'RemoveButton'}
                    type="button"
                    className={cn('button',
                      isSelected ? 'is-info' : null)
                    }
                    onClick={() => {
                      setSelectedGood(!isSelected ? good : '');
                    }}
                  >
                    {!isSelected ? '+' : '-'}
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
