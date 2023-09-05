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
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            <span>{`${selectedGood} is selected`}</span>
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setSelectedGood('');
              }}
            />
          </>
        ) : (
          <p>No goods selected</p>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={
                      isSelected ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={cn('button', {
                      'is-info': isSelected,
                    })}
                    onClick={() => setSelectedGood(isSelected ? '' : good)}
                  >
                    {isSelected ? '-' : '+'}
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
