import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { useState } from 'react';

export const goods = [
  { id: 1, name: 'Dumplings' },
  { id: 2, name: 'Carrot' },
  { id: 3, name: 'Eggs' },
  { id: 4, name: 'Ice cream' },
  { id: 5, name: 'Apple' },
  { id: 6, name: 'Bread' },
  { id: 7, name: 'Fish' },
  { id: 8, name: 'Honey' },
  { id: 9, name: 'Jam' },
  { id: 10, name: 'Garlic' },
];

export const App = () => {
  const [selectedGood, setselectedGood] = useState(goods[8]);

  const handleGoodClick = (good) => {
    if (selectedGood === good) {
      setselectedGood(null);
    } else {
      setselectedGood(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === null ? 'No goods selected' : `${selectedGood.name} is selected`}
        {(selectedGood !== null) ? (
          <button
            onClick={() => {
              setselectedGood(null);
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good.id}
                className={cn({
                  'has-background-success-light': isSelectedGood,
                })}
              >
                <td>
                  <button
                    onClick={() => {
                      handleGoodClick(good);
                    }}
                    data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelectedGood })}
                  >
                    {isSelectedGood ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.name}
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
