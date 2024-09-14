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
  const [value, setValue] = useState('Jam');
  const title = value ? (
    <h1 className="title is-flex is-align-items-center">
      {value} is selected
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => setValue('')}
      />
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  return (
    <main className="section container">
      {title}
      <table className="table">
        <tbody>
          {goods.map(good => {
            const selectedGood = value === good;
            const removeButton = (
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={() => setValue('')}
              >
                -
              </button>
            );
            const addButton = (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => setValue(good)}
              >
                +
              </button>
            );

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({ 'has-background-success-light': selectedGood })}
              >
                <td>{selectedGood ? removeButton : addButton }</td>
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
