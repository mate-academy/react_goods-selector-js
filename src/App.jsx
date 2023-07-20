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
  const defaultSelect = 'No goods selected';
  const firstSelected = 'Jam';
  const [value, setValue] = useState(firstSelected);

  return (
    <main className="section container">
      {value === defaultSelect ? (
        <h1 className="title is-flex is-align-items-center">
          {defaultSelect}
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}
          <button
            onClick={() => {
              setValue(defaultSelect);
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr data-cy="Good" key={`${index + 1}`} className={value === good ? 'has-background-success-light' : ''}>
              <td>
                <button
                  onClick={() => {
                    setValue(good);
                    if (value === good) {
                      setValue(defaultSelect)
                    }
                  }}
                  data-cy={value === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={value === good ? 'button is-info' : 'button'}
                >
                  {value === good ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </main>
  );
};
