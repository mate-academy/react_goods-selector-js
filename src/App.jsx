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
  const [selected, setSelected] = useState('Jam');

  const selectedGood = ({ good, key }) => (
    <tr data-cy="Good" className="has-background-success-light" key={key}>
      <td>
        <button
          onClick={() => setSelected(null)}
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
        >
          -
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );

  const notSelectedGood = ({ good, key }) => (
    <tr data-cy="Good" key={key}>
      <td>
        <button
          onClick={() => setSelected(good)}
          data-cy="AddButton"
          type="button"
          className="button"
        >
          +
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );

  const messageIfSelected = (
    <h1 className="title is-flex is-align-items-center">
      {selected} is selected
      <button
        onClick={() => setSelected(null)}
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
      />
    </h1>
  );

  const messageIfNotSelected = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  return (
    <main className="section container">
      {selected ? messageIfSelected : messageIfNotSelected}

      <table className="table">
        <tbody>
          {goods.map(good =>
            good === selected
              ? selectedGood({ good, key: good })
              : notSelectedGood({ good, key: good }),
          )}
        </tbody>
      </table>
    </main>
  );
};
