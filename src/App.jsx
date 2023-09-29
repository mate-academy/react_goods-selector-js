import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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

  const AddButtonClick = (good) => {
    setValue(good);
  };

  const RemoveButtonClick = () => {
    setValue(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? `${value} is selected` : 'No goods selected'}
        {value && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={RemoveButtonClick}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({ 'has-background-success-light': good === value })}
            >
              <td>
                {!value && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => AddButtonClick(good)}
                  >
                    +
                  </button>
                )}
                {value === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={RemoveButtonClick}
                  >
                    -
                  </button>
                )}
                {(value && value !== good) ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => AddButtonClick(good)}
                  >
                    +
                  </button>
                ) : false
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
