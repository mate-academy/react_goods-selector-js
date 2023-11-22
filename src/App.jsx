import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const [selectedGood, setValue] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue(null);
            }}
          />
        )}
      </h1>

      {goods.map((goodsItem) => {
        const isSameState = selectedGood === goodsItem;

        return (
          <table className="table">
            <tbody>
              <tr
                data-cy="Good"
                className={cn(
                  { 'has-background-success-light': isSameState },
                )
                }
              >
                <td>
                  {!isSameState ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setValue(goodsItem);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setValue(null);
                      }}
                    >
                      -
                    </button>
                  )
                  }
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodsItem}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </main>
  );
};
