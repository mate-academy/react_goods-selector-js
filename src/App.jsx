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
  const [goodSelected, setGoodSelected] = useState(goods[goods.length - 2]);
  const goodSelectedTitle = `${goodSelected} is selected`;
  const titleClearButton = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => setGoodSelected('')}
    />
  );

  function isSelected(good) {
    return good === goodSelected;
  }

  function handleGoodButtonClick(good) {
    if (isSelected(good)) {
      setGoodSelected('');
    }

    setGoodSelected(good);
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected ? goodSelectedTitle : 'No goods selected'}
        {goodSelected && titleClearButton}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  isSelected(good) ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected(good) ? 'button is-info' : 'button'}
                    onClick={() => handleGoodButtonClick(good)}
                  >
                    {isSelected(good) ? '-' : '+'}
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
