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
const NO_GOODS_MESSAGE = 'No goods selected';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}
              <button
                onClick={() => setSelectedGood('')}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )
          : NO_GOODS_MESSAGE}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn(
                  { 'has-background-success-light': isSelected },
                )}
              >
                <td>
                  <button
                    onClick={() => {
                      setSelectedGood(!isSelected && good);
                    }}
                    data-cy={
                      isSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={cn(
                      'button', { 'is-info': isSelected },
                    )}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
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
