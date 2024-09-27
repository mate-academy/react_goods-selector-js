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
  const [goodSelected, setgoodSelected] = useState('Jam');
  const buttonClear = () => {
    setgoodSelected('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected && `${goodSelected} is selected`}
        {goodSelected ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={buttonClear}
          />
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                goodSelected === good && 'has-background-success-light'
              }
            >
              <td>
                {goodSelected !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${good === goodSelected && 'has-background-success-light'}`}
                    onClick={() => setgoodSelected(good)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={buttonClear}
                  >
                    -
                  </button>
                )}
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
