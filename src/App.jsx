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
      {!value.length
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {value}
            {' '}
            is selected

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setValue('');
              }}
            />
          </h1>
        )
}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoods = x => x === value;

            return (
              <tr data-cy="Good" className={`${isGoods(good) && 'has-background-success-light'}`}>
                <td>
                  {
                    isGoods(good)
                      ? (
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
                      )
                      : (

                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            setValue(good);
                          }}
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
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
