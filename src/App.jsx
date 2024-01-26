import { useState } from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';
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

export const ItemGood = (
  {
    good, goodsMod, selectedGood, setselectedGood, goodsCh, setGoodsCh,
  },
) => {
  function setNewValues() {
    const chosen = goodsMod.find(e => e.id === good.id);

    chosen.bool = true;

    setGoodsCh(goodsMod);
    setselectedGood(good);
  }

  return (
    <tr data-cy="Good" className={`${((good.bool && selectedGood !== '') || (good.name === selectedGood.name)) && 'has-background-success-light'}`}>
      <td>
        <button
          data-cy={`${(good.bool && selectedGood !== '') || (good.name === selectedGood.name) ? 'RemoveButton' : 'AddButton'}`}
          type="button"
          className={cn('button', {
            'is-info': (good.bool && selectedGood !== '')
            || (good.name === selectedGood.name),
          })}
          onClick={
            ({ type }) => {
              if (type === 'click') {
                setNewValues();
              }
            }
          }
        >
          {`${(good.bool && selectedGood !== '') || (good.name === selectedGood.name) ? '-' : '+'}`}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good.name}
      </td>
    </tr>
  );
};

export const App = () => {
  const goodsMod = goods.map(itemM => ({
    id: goods.indexOf(itemM), name: itemM, bool: false,
  }));

  const goodsModSelectedOnload
  = goodsMod.find(itm => itm.name === 'Jam');

  const [selectedGood, setselectedGood] = useState(goodsModSelectedOnload);

  const [goodsCh, setGoodsCh] = useState(goodsMod);

  return (
    <main className="section container">
      <h1 className={
        `title is-flex is-align-items-center ${selectedGood ? 'is-hidden' : ''}`
        }
      >
        No goods selected
      </h1>

      <h1 className={
        `title is-flex is-align-items-center ${!selectedGood ? 'is-hidden' : ''}`
        }
      >
        {`${selectedGood.name} is selected`}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={
            () => {
              setselectedGood('');
            }
          }
        />
      </h1>

      <table className="table">
        <tbody>
          {goodsCh.map(item => (
            <ItemGood
              key={item.id}
              good={item}
              selectedGood={selectedGood}
              setselectedGood={setselectedGood}
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
