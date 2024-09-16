import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selected, setSelected] = useState('Jam');

  const clearGood = () => {
    setSelected('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? `${selected} is selected` : 'No goods selected'}
        {selected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selected ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={good !== selected ? 'AddButton' : 'RemoveButton'}
                  type="button"
                  className={good !== selected ? 'button' : 'button is-info'}
                  onClick={() => setSelected(good !== selected ? good : '')}
                >
                  {good !== selected ? '+' : '-'}
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
