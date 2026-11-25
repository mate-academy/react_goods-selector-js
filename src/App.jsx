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
  const [selectedGoods, setSelectedGood] = useState("Jam");


  return (
    <main className="section container">
    { selectedGoods ? (
      <h1 className="title is-flex is-align-items-center">
      {selectedGoods} is selected
      <button data-cy="ClearButton" type="button" className="delete ml-3" />
    </h1>
     ) : (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
      )
     }

    <table className="table">
      <tbody>
        <tr data-cy="Good">
          <td>
            <button data-cy="AddButton" type="button" className="button">
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  )
};
