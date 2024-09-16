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
  const [value, setValue] = useState('Jam');

  const handleChange = selectedGood => {
    setValue(selectedGood);

    if (selectedGood === value) {
      setValue('');
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? (
          <>
            {value} is selected
            <button
              data-cy="ClearButton"
              onClick={() => setValue('')}
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = value === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isActive ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'is-info': isActive,
                    })}
                    onClick={() => handleChange(good)}
                  >
                    {isActive ? '-' : '+'}
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
