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
  const message = value ? `${value} is selected` : 'No goods selected';

  function resetValue() {
    setValue('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {value && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={resetValue}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => {
            const isSelected = item === value;

            return (
              <tr
                key={item}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'button is-info' : 'button'}
                    onClick={() => setValue(isSelected ? '' : item)}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
