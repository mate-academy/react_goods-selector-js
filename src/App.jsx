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
  const [product, setValue] = useState('Jam');

  return (
    <main className="section container">
      {product === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {product} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('');
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(pr => (
            <tr
              data-cy="Good"
              key={pr}
              className={product === pr ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={product === pr ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={product === pr ? 'button is-info' : 'button'}
                  onClick={() => {
                    if (product === pr) {
                      setValue('');
                    } else {
                      setValue(pr);
                    }
                  }}
                >
                  {product === pr ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {pr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
