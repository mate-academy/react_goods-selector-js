import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
// import cn from 'classnames';

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
  const [currentGood, setCurrentGood] = useState('Jam');

  return (
    <main className="section container">
      {
        currentGood === ''
          ? (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${currentGood} is selected`}

              <button
                onClick={() => (
                  setCurrentGood('')
                )}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            good === currentGood
              ? (
                <tr data-cy="Good" className="has-background-success-light">
                  <td>
                    <button
                      onClick={() => (
                        setCurrentGood('')
                      )}
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
              )
              : (
                <tr data-cy="Good">
                  <td>
                    <button
                      onClick={() => (
                        setCurrentGood(good)
                      )}
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
