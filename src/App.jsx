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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {
        value
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${value} is selected`}
              <button
                onClick={() => {
                  setValue('');
                }}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
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
              className={
                classNames('', {
                  'has-background-success-light': value === good,
                })
              }
            >
              <td>
                {
                  good !== value
                    ? (
                      <button
                        onClick={() => {
                          setValue(good);
                        }}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    )
                    : (
                      <button
                        onClick={() => {
                          setValue('');
                        }}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
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
};
