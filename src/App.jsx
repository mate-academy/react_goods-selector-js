/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
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
  // eslint-disable-next-line no-unused-vars
  const [, setSelectedGood] = useState('Jam');
};

return (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <main className="section container">
    // eslint-disable-next-line no-undef, no-undef, no-undef
    {selectedGood
      ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )
      : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )
       }
    <table className="table">
      <tbody>
        {goods.map(good => (
          <tr
            data-cy="Good"
            key={good}
            className={good === selectedGood ? activeGood : ''}
          >
            <td>
              {selectedGood === good
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good)}
                  >
                    +
                  </button>
                )
              }
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
// eslint-disable-next-line no-empty
