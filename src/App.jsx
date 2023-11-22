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
  const defaultGoodValue = 'Jam';
  const defaultGoodIndex = goods.indexOf(defaultGoodValue);
  const [selectedGood, setSelectedGood] = useState(goods[defaultGoodIndex]);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={() => {
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': isSelected })}
              >
                <td>
                  {isSelected ? (
                    <button
                      onClick={() => {
                        setSelectedGood('');
                      }}
                      data-cy="RemoveButton"
                      type="button"
                      className={cn('button', { 'is-info': isSelected })}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedGood(good);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
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
