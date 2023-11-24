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
  const [selectedGood, setGoods] = useState(goods[8]);

  const clearSelect = () => {
    setGoods('');
  };

  const selectedElement = (element) => {
    setGoods(element);
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            onClick={() => {
              clearSelect('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )
        }
      </h1>

      <table className="table">
        <tbody>

          {goods.map((item) => {
            const isSelected = item === selectedGood;

            return (
              <tr
                key={item}
                data-cy="Good"
                className={cn({ 'has-background-success-light': isSelected })}
              >
                <td>
                  <button
                    onClick={() => (isSelected
                      ? clearSelect('')
                      : selectedElement(item))}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </main>
  );
};
