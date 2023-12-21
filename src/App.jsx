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
  const [goodState, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        <span>
          {goodState === '' ? 'No goods selected' : `${goodState} is selected`}
        </span>

        {goodState === ''
          ? ''
          : (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGood('')}
            />
          )
        }
      </h1>

      <Table setGood={setGood} goodState={goodState} />
    </main>
  );
};

export const Table = ({ setGood, goodState }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <Good setGood={setGood} good={good} goodState={goodState} key={good} />
      ))}
    </tbody>
  </table>
);

export const Good = ({ goodState, setGood, good }) => (
  <tr
    data-cy="Good"
    className={`${goodState === good
      ? 'has-background-success-light'
      : ''}`}
  >
    <td>
      <button
        data-cy={`${goodState === good ? 'RemoveButton' : 'AddButton'}`}
        type="button"
        className={`button ${goodState === good
          ? 'is-info'
          : ''}`}
        onClick={() => (
          goodState === good ? setGood('') : setGood(good)
        )}
      >
        {goodState === good ? '-' : '+'}
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
