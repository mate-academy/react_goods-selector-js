import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { ListItem } from './components/ListItem/ListIte';
import { GoodTitle } from './components/GoodTitle/GoodTitle';
import { goodsFromServer } from './api/goodsFromServer';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <GoodTitle
        selectedGood={selectedGood}
        setSelectedGood={setSelectedGood}
      />

      <table className="table">
        <tbody>
          {goodsFromServer.map(good => (
            <ListItem
              selectedGood={selectedGood}
              setSelectedGood={setSelectedGood}
              good={good}
              key={good}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
