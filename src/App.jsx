import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';

import './App.scss';

export const goods = [
  {
    id: 1,
    title: 'Dumplings',
  },
  {
    id: 2,
    title: 'Carrot',
  },
  {
    id: 3,
    title: 'Eggs',
  },
  {
    id: 4,
    title: 'Ice cream',
  },
  {
    id: 5,
    title: 'Apple',
  },
  {
    id: 6,
    title: 'Bread',
  },
  {
    id: 7,
    title: 'Fish',
  },
  {
    id: 8,
    title: 'Honey',
  },
  {
    id: 9,
    title: 'Jam',
  },
  {
    id: 10,
    title: 'Garlic',
  },
];

export const App = () => {
  const [selected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      {selected ? (
        <h1 className="title is-flex is-align-items-center">
          <span>{`${selected} is selected`}</span>
          <button
            onClick={() => setSelected('')}
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
          {goods.map(({ id, title }) => (
            <tr
              key={id}
              data-cy="Good"
              className={cn({
                'has-background-success-light': title === selected,
              })}
            >
              <td>
                {title === selected ? (
                  <button
                    onClick={() => setSelected('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setSelected(title)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
