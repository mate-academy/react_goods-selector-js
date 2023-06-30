/* eslint-disable react/jsx-one-expression-per-line */
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
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  const handleSelectGoods = (good = '') => {
    const toSelect = good === selectedGoods ? '' : good;

    setSelectedGoods(toSelect);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods.length
          ? (
            <>
              {selectedGoods} is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleSelectGoods}
              />
            </>
          )
          : 'No goods selected'
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selected = selectedGoods === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={`${selected && 'has-background-success-light'}`}
              >
                <td>
                  <button
                    data-cy={`${selected ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${selected && 'is-info'}`}
                    onClick={() => handleSelectGoods(good)}
                  >
                    {selected ? '-' : '+'}
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
