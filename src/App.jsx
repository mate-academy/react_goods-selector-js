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

const SelectedGood = ({ good, selected, setSelected }) => {
  const handleButtonClick = () => {
    setSelected(good === selected ? '' : good);
  };

  const compare = good === selected;

  return (
    <tr
      data-cy="Good"
      className={compare ? 'has-background-success-light' : ''}
    >
      <td>
        <button
          data-cy={compare ? 'RemoveButton' : 'AddButton'}
          type="button"
          className={`button ${compare ? 'is-info' : ''}`}
          onClick={handleButtonClick}
        >
          {compare ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};

export const App = () => {
  const [selected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      {selected ? (
        <h1 className="title is-flex is-align-items-center">
          {selected} is selected
          <button
            data-cy="ClearButton"
            type="button"
            onClick={() => setSelected('')}
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
            <SelectedGood
              key={good}
              good={good}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
