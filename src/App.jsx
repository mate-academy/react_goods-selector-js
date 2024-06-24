import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const initialValue = 'Jam';
  const [value, setValue] = useState(initialValue);

  const onSelect = newValue => {
    setValue(newValue);
  };

  const onDeselect = () => {
    setValue(null);
  };

  return (
    <main className="section container">
      {!value && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {value && (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}
          <button
            data-cy="ClearButton"
            onClick={onDeselect}
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === value;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  {!isSelected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => onSelect(good)}
                    >
                      +
                    </button>
                  )}

                  {isSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={onDeselect}
                    >
                      -
                    </button>
                  )}
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
