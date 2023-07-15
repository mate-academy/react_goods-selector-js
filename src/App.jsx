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
  const [name, setName] = useState('Jam');
  const selected = true;
  // let value = '+';
  // const [selected, setSelected] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? '' : 'No goods selected'}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        {
          selected
            ? `${name} is selected`
            : ''
        }

        {
          selected && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const [value, setValue] = useState('+');

            return (
              <tr
                key={good}
                data-cy="Good"
                className={good === 'Jam' ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    onClick={() => {
                      setValue('-');
                      setName(good);
                    }}
                    data-cy={good === 'Jam' ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${good === 'Jam' ? 'is-info' : ''}`}
                  >
                    {value}
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
