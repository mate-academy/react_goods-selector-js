import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';
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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setSelectedGood('')}
              />
            </>
          )
        }
      </h1>

      <table className="table">
        <tbody>
          <GoodsList
            goods={goods}
            selectedGood={selectedGood}
            onGoodsSelect={setSelectedGood}
          />
        </tbody>
      </table>
    </main>
  );
};
