import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Header } from './Header/Header';
import { Table } from './Table/Table';

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

  const handleSelect = good => setSelectedGood(good);
  const handleDelete = () => setSelectedGood(null);

  return (
    <main className="section container">
      <Header goodName={selectedGood} handleDelete={handleDelete} />

      <Table
        goods={goods}
        handleSelect={handleSelect}
        selectedGood={selectedGood}
        handleDelete={handleDelete}
      />

    </main>
  );
};
