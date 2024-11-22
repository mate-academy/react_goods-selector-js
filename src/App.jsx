import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood(null);
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelect = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  isGoodSelect && 'has-background-success-light',
                )}
              >
                <td>
                  <button
                    data-cy={isGoodSelect ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', isGoodSelect && 'is-info')}
                    onClick={() => {
                      setSelectedGood(isGoodSelect ? null : good);
                    }}
                  >
                    {isGoodSelect ? '-' : '+'}
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
