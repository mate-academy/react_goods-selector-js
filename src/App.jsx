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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value === '' ? 'No goods selected'
          : (
            <>
              {`${value} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  setValue('');
                }}
              />
            </>
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': value === good,
              })}
            >
              <td>
                <button
                  data-cy={value === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': value === good,
                  })}
                  onClick={() => {
                    const isSelected = value === good;

                    setValue(isSelected ? '' : good);
                  }}
                >
                  {value === good ? '-' : '+'}
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
