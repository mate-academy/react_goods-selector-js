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

  return (
    <main>
      <h1 className="title is-flex is-align-items-center">
        {selectedGood.length === 0
          ? 'No goods selected'
          : (
            <>
              {`${selectedGood} is selected`}
              <button
                onClick={() => {
                  setselectedGood('');
                }}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )
        }
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            good === selectedGood
              ? (
                <tr
                  key={good}
                  data-cy="Good"
                  className="has-background-success-light"
                >
                  <td>
                    <button
                      onClick={() => {
                        setselectedGood('');
                      }}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ) : (
                <tr data-cy="Good" key={good}>
                  <td>
                    <button
                      onClick={() => {
                        setselectedGood(good);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
          ))}
        </tbody>
      </table>
    </main>
  );
};
