import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { Table } from './components/Table';

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
  const [thisGood, setThisGood] = useState('Jam');
  const NoSelected = 'No goods selected';
  const clearGoodsState = () => {
    setThisGood('');
  };

  const checkToRemove = (good) => {
    if (thisGood !== good) {
      setThisGood(good);
    } else {
      clearGoodsState();
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {thisGood ? `${thisGood} is selected` : NoSelected}
        {thisGood !== '' && (
          <button
            onClick={() => {
              setThisGood('');
              clearGoodsState();
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )
        }

      </h1>

      <table className="table">
        <Table
          key={goods}
          goods={goods}
          thisGood={thisGood}
          setThisGood={setThisGood}
          clearGoodsState={clearGoodsState}
          checkToRemove={checkToRemove}
        />
      </table>
    </main>
  );
};
