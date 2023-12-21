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
          {!goodState ? 'No goods selected' : `${goodState} is selected`}
        </span>

        {!goodState
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

export const Good = ({ goodState, setGood, good }) => {
  const setGoodState = () => {
    if (goodState === good) {
      setGood('');
    } else {
      setGood(good);
    }
  };

  let btnClass = 'button';

  if (goodState === good) {
    btnClass += ' is-info';
  }

  let dataCYButton = 'AddButton';

  if (goodState === good) {
    dataCYButton = 'RemoveButton';
  }

  let goodClass = '';

  if (goodState === good) {
    goodClass += ' has-background-success-light';
  }

  return (
    <tr
      data-cy="Good"
      className={goodClass}
    >
      <td>
        <button
          data-cy={dataCYButton}
          type="button"
          className={btnClass}
          onClick={() => (
            setGoodState()
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
};
