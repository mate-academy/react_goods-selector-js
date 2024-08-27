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
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good !== 'No goods selected' ? `${good} is selected` : good}
        {good !== 'No goods selected' ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('No goods selected')}
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(value => {
            const isSelected = good === value;

            return (
              <tr
                data-cy="Good"
                key={value}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'is-info button' : 'button'}
                    onClick={() =>
                      setGood(isSelected ? 'No goods selected' : value)
                    }
                  >
                    {isSelected ? '-' : '+'}
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
