import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Table } from './Components/Table/table';

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

  const selectGood = good => {
    setSelectedGood(good);
  };

  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            onClick={clearSelection}
            className="delete ml-3"
          />
        )}
      </h1>

      <Table
        goods={goods}
        selectedGood={selectedGood}
        selectGood={selectGood}
        clearSelection={clearSelection}
      />
    </main>
  );
};
