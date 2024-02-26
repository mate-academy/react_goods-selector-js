import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

import { Good } from './Components/Good/Good';
import { SelectedGoodMessage } from './Components/SelectedGoodMessage';

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

  return (
    <main className="section container">
      <SelectedGoodMessage
        selectedItem={selectedGood}
        onGoodClick={setSelectedGood}
      />

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <Good
                good={good}
                key={good}
                selectedGood={selectedGood}
                onGoodClick={setSelectedGood}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
