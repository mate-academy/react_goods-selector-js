import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cv from 'classnames';

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
  const [selectedList, setSelectedList] = useState('Jam');
  const handleResetList = () => setSelectedList('');
  const handleAddGoodToList = good => setSelectedList(good);
  const isInList = good => selectedList.includes(good);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedList.length ? (
          <>
            {`${selectedList} is selected`}
            <button
              onClick={() => handleResetList()}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cv({
                'has-background-success-light': isInList(good),
              })}
            >
              {isInList(good) ? (
                <td>
                  <button
                    onClick={() => handleResetList()}
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
                    onClick={() => handleAddGoodToList(good)}
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
          ))}
        </tbody>
      </table>
    </main>
  );
};
