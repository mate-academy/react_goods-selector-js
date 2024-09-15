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

function setButton(good, value, setValue) {
  if (good === value)
    return (
      <td>
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => setValue(null)}
        >
          -
        </button>
      </td>
    );

  return (
    <td>
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => setValue(good)}
      >
        +
      </button>
    </td>
  );
}

export const App = () => {
  const defaultH1 = 'No goods selected';
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value === null ? (
        <h1 className="title is-flex is-align-items-center">{defaultH1}</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue(null)}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={good === value && 'has-background-success-light'}
            >
              {setButton(good, value, setValue)}

              <td
                data-cy="GoodTitle"
                className="is-vcentered"
                style={{ color: good === value ? 'black' : 'white' }}
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
