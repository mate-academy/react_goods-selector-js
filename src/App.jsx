import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Good } from './components/Good';

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
  const [selected, setGood] = useState('Jam');

  return (
    <main className="section container">
      {selected ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selected} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
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
            <Good key={`${good}`} good={good} selected={selected} setGood={setGood} />
          ))}
        </tbody>
      </table>
    </main>
  );
};
