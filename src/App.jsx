import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { GoodsTable } from './components/GoodsTable';

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
  const handleResetGood = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => setSelectedGood(null)}
    />
  );
  const title =
    selectedGood !== null ? `${selectedGood} is selected` : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}

        {selectedGood && handleResetGood}
      </h1>

      <GoodsTable
        goods={goods}
        selectGood={setSelectedGood}
        selectedGood={selectedGood}
      />
    </main>
  );
};
