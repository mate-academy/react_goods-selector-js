import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [selectedGood, setValue] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood}

        {
          selectedGood !== 'No goods selected'
            ? (
              <button
                onClick={() => {
                  setValue('No goods selected');
                }}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            )
            : null
        }
      </h1>

      <table className="table">
        {goods.map(good => (
          <tbody>
            <tr
              data-cy="Good"
              className={
                classNames(null, {
                  'has-background-success-light': selectedGood.includes(good),
                })
              }
            >
              <td>
                {
                  selectedGood.includes(good)
                    ? (
                      <button
                        onClick={() => {
                          setValue('No goods selected');
                        }}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        onClick={() => {
                          setValue(`${good} is selected`);
                        }}
                        data-cy="AddButton"
                        type="button"
                        className="button"
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
          </tbody>
        ))}
      </table>
    </main>
  );
};
