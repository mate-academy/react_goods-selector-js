import { useState } from 'react';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selectedGood, setSelectedGood] = useState({ ...goods[8] });

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood.name} is selected`}
        {selectedGood !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good.id}
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood.id === good.id,
              })}
            >
              <td>
                {selectedGood.id !== good.id ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(good);
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
                      setSelectedGood('');
                    }}
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
