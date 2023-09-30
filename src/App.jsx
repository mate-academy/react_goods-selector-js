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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      {(selectedGood === '')
        && (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )}


      {selectedGood &&
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setGood('');
              }}
            />
          )}

        </h1>
      }
      {/* <h1 className="title is-flex is-align-items-center">
        {selectedGood.length > 0 && `${selectedGood} is selected`}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
            }}
          />
        )}

      </h1> */}

      <table className="table">
        <tbody>

          {goods.map(el => (
            <tr
              className={selectedGood === el
                ? 'has-background-success-light'
                : null}
              data-cy="Good"
              key={el}
            >
              <td>
                {selectedGood === el
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setGood('');
                      }}
                    >
                      -
                    </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setGood(el);
                      }}
                    >
                      +
                    </button>
                  )
                }
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {el}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
