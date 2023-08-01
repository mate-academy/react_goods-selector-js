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
  const clearSelectedGood = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood
          ? (
            'No goods selected'
          )
          : (
            <>
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearSelectedGood}
              />
            </>
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={good === selectedGood
                  && 'has-background-success-light'}
              key={good}
            >
              <td>
                {good !== selectedGood
                  ? (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                    </td>
                  )
                  : (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={clearSelectedGood}
                      >
                        -
                      </button>
                    </td>
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
};
