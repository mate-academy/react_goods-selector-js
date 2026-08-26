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
  const [value, setValue] = useState('Jam is selected');
  const [active, setActive] = useState(['Jam']);

  return (
    <main className="section container">
      {active.length === 0 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setActive([])}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={`${active.includes(good) ? 'has-background-success-light' : ''}`}
            >
              <td>
                <button
                  data-cy={`${active.includes(good) ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`${active.includes(good) ? 'button is-info' : 'button'}`}
                  onClick={() => {
                    setValue(`${good} is selected`);
                    if (!active.includes(good)) {
                      setActive(good);
                    } else {
                      setActive(prev => prev.filter(item => item !== good));
                    }
                  }}
                >
                  {active.includes(good) ? '-' : '+'}
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
