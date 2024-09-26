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

const GoodsButton = ({ onClick, selected, text, type }) => (
  <button
    onClick={onClick}
    type="button"
    className={`button ${type}`}
    data-cy={selected ? 'RemoveButton' : 'AddButton'}
  >
    {text}
  </button>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isGoodSelected = good => selectedGood === good;

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => setSelectedGood(null)}
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
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': isGoodSelected(good),
              })}
            >
              <td>
                <GoodsButton
                  onClick={() =>
                    setSelectedGood(isGoodSelected(good) ? null : good)
                  }
                  selected={isGoodSelected(good)}
                  text={isGoodSelected(good) ? '-' : '+'}
                  type={isGoodSelected(good) ? 'is-info' : null}
                />
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
