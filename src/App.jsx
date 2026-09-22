import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { useState } from 'react';
import './App.scss';

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
  const [selectedGood, setSelectedGoods] = useState('Jam');

  function setTitle() {
    if (selectedGood.length === 0) {
      return (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      );
    }

    return (
      <h1 className="title is-flex is-align-items-center">
        {selectedGood} is selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGoods('')}
        />
      </h1>
    );
  }

  function createButton(value) {
    if (value === selectedGood) {
      return (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => {
            setSelectedGoods('');
          }}
        >
          -
        </button>
      );
    }

    return (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => setSelectedGoods(value)}
      >
        +
      </button>
    );
  }

  return (
    <main className="section container">
      {setTitle()}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>{createButton(good)}</td>

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
