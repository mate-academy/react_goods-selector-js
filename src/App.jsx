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

const goodsWithID = goods.map((good, index) => ({
  id: index + 1,
  element: good,
}));

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1
        className={`title ${selectedGood ? 'is-flex is-align-items-center' : ''}`}
      >
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsWithID.map(good => {
            const isClicked = selectedGood === good.element;

            return (
              <tr
                key={good.id}
                data-cy="Good"
                className={`${isClicked && 'has-background-success-light'}`}
              >
                <td>
                  <button
                    data-cy={isClicked ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isClicked ? 'is-info' : ''}`}
                    onClick={() =>
                      isClicked
                        ? setSelectedGood('')
                        : setSelectedGood(good.element)
                    }
                  >
                    {isClicked ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.element}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
