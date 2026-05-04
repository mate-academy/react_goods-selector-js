import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Title } from './components/Title';
import { GoodsList } from './components/GoodsList';

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
  const [selectedGood, setSelectedGoog] = useState('Jam');

  return (
    <main className="section container">
      <Title selectedGood={selectedGood} setSelectedGoog={setSelectedGoog} />
      <GoodsList
        goods={goods}
        selectedGood={selectedGood}
        setSelectedGoog={setSelectedGoog}
      />
    </main>
  );
};
