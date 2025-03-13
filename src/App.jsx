import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

const AddButton = ({ handler }) => (
  <button
    onClick={handler}
    data-cy="AddButton"
    type="button"
    className="button"
  >
    +
  </button>
);

const RemoveButton = ({ handler }) => (
  <button
    onClick={handler}
    data-cy="RemoveButton"
    type="button"
    className="button is-info"
  >
    -
  </button>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const removeItem = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={removeItem}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(nameOfProduct => {
            const isSelected = selectedGood.includes(nameOfProduct);

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
                key={nameOfProduct}
              >
                <td>
                  {isSelected ? (
                    <RemoveButton handler={removeItem} />
                  ) : (
                    <AddButton handler={() => setSelectedGood(nameOfProduct)} />
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {nameOfProduct}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
