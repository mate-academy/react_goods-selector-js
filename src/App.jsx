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
  let titleText;

  if (selectedGood) {
    titleText = `${selectedGood} is selected`;
  } else {
    titleText = 'No goods selected';
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              key={item}
              data-cy="Good"
              className={selectedGood === item ? 'has-background-success-light' : ''}
            >
              <td>
                {selectedGood !== item && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(item)}
                  >
                    +
                  </button>
                )}

                {selectedGood === item && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
