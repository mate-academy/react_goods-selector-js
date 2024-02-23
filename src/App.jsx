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

  function renderGoods(item) {
    if (item === selectedGood) {
      return (
        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              onClick={() => {
                setSelectedGood('');
              }}
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {item}
          </td>
        </tr>
      );
    }

    return (
      <tr data-cy="Good">
        <td>
          <button
            onClick={() => {
              setSelectedGood(item);
            }}
            data-cy="AddButton"
            type="button"
            className="button"
          >
            +
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {item}
        </td>
      </tr>
    );
  }

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => {
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>{goods.map(item => renderGoods(item))}</tbody>
      </table>
    </main>
  );
};
