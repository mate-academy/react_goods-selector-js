import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
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
  const [selectProduct, setSelectProduct] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectProduct ? (
          <>
            {selectProduct} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectProduct(null)}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          <GoodsList
            goodsList={goods}
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
          />
        </tbody>
      </table>
    </main>
  );
};
