import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Good } from './components/Good/Good';

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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const setAvoidValue = () => setSelectedGood('');

  return (
    <main className="section container">
      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={setAvoidValue}
          />
        </h1>
      )}
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good
              good={good}
              key={good}
              selectedGood={selectedGood}
              setSelectedGood={setSelectedGood}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
