import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Title } from './components/Title';
import { GoodsList } from './components/GoodsList/GoodsList';

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
      <Title good={selectedGood} onClear={setSelectedGood} />

      <GoodsList
        goods={goods}
        selectedGood={selectedGood}
        onSelect={setSelectedGood}
      />
    </main>
  );
};
