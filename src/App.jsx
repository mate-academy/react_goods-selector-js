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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value === '' ? (
        <h1
          className="title is-flex is-align-items-center"
        >
          No goods selected
        </h1>
      ) : (
        <div>
          <h1 className="title is-flex is-align-items-center">{`${value} is selected`}</h1>
          <button
            onClick={() => {
              setValue('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </div>
      )}
      {goods.map(word => (
        <div>
          <table className="table">
            <tbody>
              {value !== word ? (
                <tr data-cy="Good">
                  <td>
                    <button
                      onClick={() => {
                        setValue(word);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {word}
                  </td>
                </tr>
              ) : (
                <tr data-cy="Good" className="has-background-success-light">
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setValue('');
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {word}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </main>
  );
};
