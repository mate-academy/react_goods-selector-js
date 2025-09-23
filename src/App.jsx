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
  const [goodSelected, setIsSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected === '' ? 'No goods selected' : ''}
      </h1>

      {goodSelected !== '' ? (
        <h1 className="title is-flex is-align-items-center">
          {`${goodSelected} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setIsSelected('')}
          />
        </h1>
      ) : (
        ''
      )}

      <table className="table">
        <tbody>
          {goods.map(value => {
            return (
              <tr
                data-cy="Good"
                key={value}
                className={
                  goodSelected === value ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      goodSelected === value ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${goodSelected === value ? 'is-info' : ''}`}
                    onClick={() => {
                      setIsSelected(value);
                      if (goodSelected === value) {
                        setIsSelected('');
                      }
                    }}
                  >
                    {goodSelected === value ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
