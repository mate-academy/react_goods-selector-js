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
  const handleClick = (good) => {
    if (value === good) {
      setValue('');
    } else {
      setValue(good);
    }
  };

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">
        {}
      </h1> */}

      <h1 className="title is-flex is-align-items-center">
        {value ? `${value} is selected` : 'No goods selected'}
        {value && (
        <button
          onClick={() => setValue('')}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
        )}
      </h1>

      <table className="table">
        <tbody>
          <div>
            {[...goods].map(good => (
              <tr
                className={good === value ? 'has-background-success-light' : ''}
                data-cy="Good"
              >
                <td>
                  <button
                    onClick={() => handleClick(good)}
                    data-cy={good === value ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': value === good })}
                  >
                    {value === good ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </div>
        </tbody>
      </table>
    </main>
  );
};
