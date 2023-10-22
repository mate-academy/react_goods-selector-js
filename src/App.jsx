import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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
  const [value, setValue] = useState('Jam');
  const isSelected = selected => selected === value;

  const reset = () => setValue('');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {value
          ? `${value} is selected`
          : `No goods selected`
        }
        {value
          && (
            <button
              onClick={reset}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn(
                { 'has-background-success-light': isSelected(good) },
              )}
            >
              <td>

                <button
                  onClick={() => setValue(isSelected(good) ? '' : good)}
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', { 'is-info': isSelected(good) })}
                >
                  {!isSelected(good)

                    ? ('+')
                    : ('-') }

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
