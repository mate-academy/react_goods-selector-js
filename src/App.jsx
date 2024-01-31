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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {value.length > 0
          ? `${value} is selected`
          : 'No goods selected'
        }

        {value.length > 0 && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={event => setValue('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              data-cy="Good"
              key={good}
              className={good === value ? 'has-background-success-light' : null}
            >
              <td>
                <button
                  onClick={() => {
                    if (value === good) {
                      setValue('');
                    } else {
                      setValue(good);
                    }
                  }}
                  data-cy={value !== good ? 'AddButton' : 'RemoveButton'}
                  type="button"
                  className={good === value ? 'button is-info' : 'button'}
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
