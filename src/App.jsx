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
function Button({ changeButon, children, set }) {
  return (
    <button
      data-cy={changeButon}
      type="button"
      className="button is-info"
      onClick={set}
    >
      {children}
    </button>
  );
}

function ClearButton({ reset }) {
  return (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={reset}
    />
  );
}

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(goods[8]);
  const clearTitle = () => setSelectedGood('');

  return (
    <main className="section container">
      {selectedGood === ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <ClearButton
              reset={clearTitle}
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                {selectedGood === good
                  ? (
                    <Button
                      changeButon="addButton"
                      set={() => setSelectedGood(good)}
                    >
                      -
                    </Button>
                  )
                  : (
                    <Button
                      changeButon="RemoveButton"
                      set={() => setSelectedGood(good)}
                    >
                      +
                    </Button>
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
