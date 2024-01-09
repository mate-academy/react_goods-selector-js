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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === 'No goods selected'
          ? 'No goods selected'
          : `${selectedGood} is selected`}
        {selectedGood !== 'No goods selected' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('No goods selected');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={good === selectedGood
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  data-cy={good === selectedGood
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={good === selectedGood
                    ? 'button is-info'
                    : 'button'}
                  onClick={() => {
                    setSelectedGood((prev) => {
                      const newSelectedGood = prev === good
                        ? 'No goods selected'
                        : good;

                      return newSelectedGood;
                    });
                  }}
                >
                  {good === selectedGood
                    ? '-'
                    : '+'}
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
