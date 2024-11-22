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
  const [selectedValue, setSelectedValue] = useState(goods[goods.length - 2]);

  return (
    <main className="section container">
      {selectedValue ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedValue} is selected
          <button
            onClick={() => {
              setSelectedValue(null);
            }}
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
          {goods.map((good, index) => {
            return (
              <tr
                data-cy="Good"
                key={good}
                className={
                  good === selectedValue ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {good === selectedValue ? (
                    <button
                      onClick={() => {
                        setSelectedValue(null);
                      }}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedValue(goods[index]);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
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
