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
  const [goodsList, setGoodsList] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodsList.length === 0 ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {goodsList}
            {` is selected`}
            <button
              onClick={() => {
                setGoodsList('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good">
              <td>
                {goodsList.includes(good) ? (
                  <button
                    onClick={() => {
                      const updatedList = goodsList
                        .split(', ')
                        .filter(item => item !== good)
                        .join('');

                      setGoodsList(updatedList);
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
                      setGoodsList(`${goodsList}${goodsList.length > 0 ? ', ' : ''}${good}`);
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
          ))}
        </tbody>
      </table>
    </main>
  );
};
