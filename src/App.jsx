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
  const [selectedGood, setSelectName] = useState('Jam');

  const clearSelectName = () => {
    setSelectName('');
  };

  const toggleSelectGood = (goodName) => {
    setSelectName(prevName => (prevName === goodName
      ? ''
      : goodName));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelectName}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(x => (
            <tr
              data-cy="Good"
              className={
                selectedGood === x
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === x
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={selectedGood === x
                    ? 'button is-info'
                    : 'button'}
                  onClick={() => toggleSelectGood(x)}
                >
                  {selectedGood === x
                    ? '-'
                    : '+'
                  }
                </button>
              </td>

              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
