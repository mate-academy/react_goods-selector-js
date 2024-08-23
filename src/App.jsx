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

  const renderDisplayInfo = () => {
    let displayInfo = (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );

    if (value) {
      displayInfo = (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue(null)}
          />
        </h1>
      );
    }

    return displayInfo;
  };

  return (
    <main className="section container">
      {renderDisplayInfo()}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isValue = good === value;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isValue ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={`${isValue ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${isValue ? 'is-info' : ''}`}
                    onClick={() => setValue(isValue ? null : good)}
                  >
                    {isValue ? '-' : '+'}
                  </button>
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                  onClick={() => setValue(isValue ? null : good)}
                >
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
