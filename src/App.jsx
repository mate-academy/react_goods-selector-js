import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Good } from './Good';

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
  const [selectedGood, setSelectedGood] = useState(`Jam`);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good
              good={good}
              selectedGood={selectedGood}
              setSelectedGood={setSelectedGood}
              key={good}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
