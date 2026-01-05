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
  const clearTitle = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearTitle}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(el => {
            let actionButton = null;

            if (selectedGood === '') {
              actionButton = (
                <button data-cy="AddButton" type="button" className="button">
                  +
                </button>
              );
            } else if (el === selectedGood) {
              actionButton = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              );
            }

            return (
              <tr
                data-cy="Good"
                key={el}
                className={
                  el === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {actionButton}
                  {}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {el}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

// <tr data-cy="Good" className="has-background-success-light">
//   <td>
//     <button
//       data-cy="RemoveButton"
//       type="button"
//       className="button is-info"
//     >
//       -
//     </button>
//   </td>

//   <td data-cy="GoodTitle" className="is-vcentered">
//     Jam
//   </td>
// </tr>

// <tr data-cy="Good">
//   <td>
//     <button data-cy="AddButton" type="button" className="button">
//       +
//     </button>
//   </td>

//   <td data-cy="GoodTitle" className="is-vcentered">
//     Garlic
//   </td>
// </tr>
