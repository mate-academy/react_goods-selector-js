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

const SelectedGood = ({ selectedGood, reset }) => (
  <h1 className="title is-flex is-align-items-center">
    {selectedGood} is selected
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={reset}
    />
  </h1>
);

const Table = ({ selectedGood, setSelectedGood, reset }) => {
  return goods.map(good => (
    <Item
      good={good}
      selectedGood={selectedGood}
      setSelectedGood={setSelectedGood}
      reset={reset}
    />
  ));
};

const Item = ({ good, selectedGood, setSelectedGood, reset }) => (
  <tr
    data-cy="Good"
    className={selectedGood === good ? `has-background-success-light` : ``}
    key={good}
  >
    <td>
      {selectedGood !== good ? (
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
          onClick={reset}
        >
          -
        </button>
      )}
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const reset = () => setSelectedGood('');

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <SelectedGood selectedGood={selectedGood} reset={reset} />
      )}

      <table className="table">
        <tbody>
          <Table
            selectedGood={selectedGood}
            setSelectedGood={setSelectedGood}
            reset={reset}
          />
        </tbody>
      </table>
    </main>
  );
};
