import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
// import { values } from 'cypress/types/lodash';

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
      <h1 className="title is-flex is-align-items-center">
        { value ? (
          <span>
            { `${value} is selected` }
          </span>
        ) : (
          <span>No goods selected</span>
        )
        }

        { value && (
          <>
            <button
              onClick={ () => {
                setValue(null);
              } }
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) }
      </h1>

      <table className="table">
        <tbody>
          { goods.map(good => (
            <tr
              data-cy="Good"
              className={ cn({
                'has-background-success-light': value === good,
              }) }
            >
              <td>
                <button
                  onClick={ () => {
                    // eslint-disable-next-line no-unused-expressions
                    value === good ? (
                      setValue(null)
                    ) : (
                      setValue(good));
                  } }
                  data-cy={ cn({
                    AddButton: value !== good,
                    RemoveButton: value === good,
                  }) }
                  type="button"
                  className={ cn('button', {
                    'is-info': value === good,
                  }) }
                >
                  { value === good ? (
                    <span>-</span>
                  ) : (
                    <span>+</span>
                  ) }
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                { good }
              </td>
            </tr>

          )) }
        </tbody>
      </table>
    </main>
  );
};
