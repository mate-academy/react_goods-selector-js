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
  const [item, setItem] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {item !== '' ? `${item} is selected` : 'No goods selected'}

        {item !== '' && (
          <button
            onClick={() => setItem('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(x => {
            const isSelected = x === item;

            return (
              <tr
                className={isSelected ? 'has-background-success-light' : ''}
                data-cy="Good"
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'button is-info' : 'button'}
                    onClick={() => {
                      if (isSelected) {
                        setItem('');
                      } else {
                        setItem(x);
                      }
                    }}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {x}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
