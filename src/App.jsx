import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            onClick={() => {
              setSelectedGood(null);
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
          {goods.map(good => (
            <tr
              className={cn({
                'has-background-success-light': selectedGood === good.name,
              })}
              key={good.id}
              data-cy="Good"
            >
              <td>
                <button
                  onClick={() => {
                    setSelectedGood(good.name);
                  }}
                  data-cy="AddButton"
                  type="button"
                  className={`button ${selectedGood === good.name
                    && ('is-info')}`}
                >
                  {selectedGood === good.name ? ('-') : ('+')}
                </button>
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
