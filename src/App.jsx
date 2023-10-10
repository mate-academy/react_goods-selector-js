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
  function setHeading(selectedGood) {
    return goods.includes(selectedGood)
      ? `${selectedGood} is selected`
      : 'No goods selected';
  }

  const [selectedGood, setselectedGood] = useState('Jam');
  let key = 0;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          setHeading(selectedGood)
        ) : (
          setHeading(selectedGood)
        )}

        {goods.includes(selectedGood) && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setselectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            key += 1;

            return (
              <tr
                key={key}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    className={cn('button', {
                      'is-info': isSelected,
                    })}
                    data-cy={isSelected ? (
                      'RemoveButton'
                    ) : (
                      'AddButton'
                    )}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        return setselectedGood('');
                      }

                      return setselectedGood(good);
                    }}
                  >
                    {isSelected ? (
                      '-'
                    ) : (
                      '+'
                    )}

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
