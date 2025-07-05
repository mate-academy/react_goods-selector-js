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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const resetGood = () => setSelectedGood('');
  const isEqual = (item1, item2) => {
    return item1 === item2;
  };

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => resetGood()}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                isEqual(good, selectedGood)
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={
                    isEqual(good, selectedGood) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={
                    isEqual(good, selectedGood) ? 'button is-info' : 'button'
                  }
                  onClick={() =>
                    isEqual(good, selectedGood)
                      ? resetGood()
                      : setSelectedGood(good)
                  }
                >
                  {isEqual(good, selectedGood) ? '-' : '+'}
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
