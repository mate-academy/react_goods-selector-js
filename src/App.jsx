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
  const [goodsItem, setValue] = useState('Jam');
  const titleDefaultText = 'No goods selected';
  const titleSelectedText = `${goodsItem} is selected`;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodsItem ? titleSelectedText : titleDefaultText}

        {goodsItem && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={(e) => {
              setValue('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={
                goodsItem === item
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                {
                  goodsItem === item
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={(e) => {
                          setValue();
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
                          setValue(item);
                        }}
                      >
                        +
                      </button>
                    )
                }
              </td>

              <td data-cy="Goonpm run testdTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
