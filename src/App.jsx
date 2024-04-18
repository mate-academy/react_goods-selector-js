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
  const [selectedGood, selectNewGood] = useState('Jam');
  let title = (
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => {
          selectNewGood('');
        }}
      />
    </h1>
  );

  if (selectedGood === '') {
    title = (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );
  }

  return (
    <main className="section container">
      {title}

      <table className="table">
        <tbody>
          {goods.map(good => {
            if (selectedGood === good) {
              return (
                <tr data-cy="Good" className="has-background-success-light">
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        selectNewGood('');
                      }}
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            }

            return (
              <tr data-cy="Good">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      selectNewGood(good);
                    }}
                  >
                    +
                  </button>
                </td>

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
