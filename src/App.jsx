import uuid from 'react-uuid';
import cn from 'classnames';
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
  const [selectedGood, setselectedGood] = useState(goods[8]);

  const selectGood = good => {
    setselectedGood(good);
  };

  const deleteSelected = e => {
    setselectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={e => {
              deleteSelected(e);
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={uuid()}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': good === selectedGood,
                })}
              >
                {good === selectedGood ? (
                  <td>
                    <button
                      onClick={e => {
                        deleteSelected(e);
                      }}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      onClick={() => {
                        selectGood(good);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  </td>
                )}

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
