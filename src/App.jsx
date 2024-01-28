import { useState } from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';
import { ItemGood } from './components/ItemGood';
import './App.scss';

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
  const goodsMod = goods.map(itemM => ({
    id: goods.indexOf(itemM) + 1, name: itemM, bool: false,
  }));

  const Jam = goodsMod.find(i => i.name === 'Jam');

  Jam.bool = true;

  const [goodsCh, setGoodsCh] = useState(goodsMod);

  const selectedName
  = goodsCh.find(i => i.bool)
    ? goodsCh.find(i => i.bool).name : '';

  const setNoGoods = function setNo() {
    const a = goodsMod.map(e => ({
      ...e, bool: false,
    }));

    setGoodsCh(a);
  };

  return (
    <main className="section container">
      <h1 className={cn('title is-flex is-align-items-center', {
        'is-hidden': selectedName,
      })}
      >
        No goods selected
      </h1>

      <h1 className={cn('title is-flex is-align-items-center', {
        'is-hidden': !selectedName,
      })}
      >
        {`${selectedName} is selected`}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={setNoGoods}
        />
      </h1>

      <table className="table">
        <tbody>
          {goodsCh.map(item => (
            <ItemGood
              key={item.id}
              good={item}
              goodsMod={goodsMod}
              goodsCh={goodsCh}
              setGoodsCh={setGoodsCh}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
