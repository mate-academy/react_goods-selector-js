import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { GoodCard } from './components/GoodCard';

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
  const [goodSelected, selectGood] = useState('Jam');

  return (
    <main className="section container">
      {goodSelected.length !== 0
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${goodSelected} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => selectGood('')}
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <GoodCard
              good={good}
              onGoodSelected={selectGood}
              selected={goodSelected}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
