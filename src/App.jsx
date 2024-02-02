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
        {value ? `${value} is selected` : `No goods selected`}

        {value && (
        <button
          onClick={() => (
            setValue('')
          )}
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
              className={value === good && `has-background-success-light`}
            >
              <td>
                <button
                  onClick={() => {
                    setValue(value === good ? '' : good);
                  }}
                  data-cy={value === good ? `RemoveButton` : 'AddButton'}
                  type="button"
                  className={value === good ? `button is-info` : 'button'}
                >
                  {value === good ? `-` : '+'}
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
