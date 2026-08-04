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
  const [selectedState, setState] = useState('Jam');
  const clearButton = document.querySelector('[data-cy="ClearButton"]');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>

      <h1 className="title is-flex is-align-items-center">
        {selectedState} is selected
        <button
          onClick={() => {
            setState('');
          }}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          // style={{ display: 'none' }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(x => (
            <tr data-cy={x}>
              <td>
                <button
                  onClick={() => {
                    setState(x);

                    const tr = document.querySelector(`[data-cy=${x}]`);

                    tr.className = 'has-background-success-light';
                    clearButton.style.display = 'inline-block';
                    clearButton.onClick = () => {
                      setState('');
                      tr.classList.remove('has-background-success-light');
                    };
                  }}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}

          {/* <tr data-cy="Good">
            <td>
              <button
                onClick={() => {
                  setState('Dumplings');
                }}
                data-cy="AddButton"
                type="button"
                className="button"
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
};
