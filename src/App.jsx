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
  function setGoodsModChItm() {
    const chosen = goodsMod.find(e => e.id === good.id);

    chosen.bool = true;
    setGoodsCh(goodsMod);
  }

  return (
    <tr data-cy="Good" className={`${good.bool && 'has-background-success-light'}`}>
      <td>
        <button
          data-cy={`${good.bool ? 'RemoveButton' : 'AddButton'}`}
          type="button"
          className={cn('button', {
            'is-info': good.bool,
          })}
          onClick={
            ({ type }) => {
              if (type === 'click') {
                setGoodsModChItm();
                setselectedGood(`${good.name} is selected`);
              }
            }
          }
        >
          {`${good.bool ? '-' : '+'}`}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good.name}
      </td>
    </tr>
  );
};

export const App = () => {
  const [selectedGood, setselectedGood] = useState('Jam is selected');

  const goodsMod = goods.map(itemM => ({
    id: goods.indexOf(itemM), name: itemM, bool: false,
  }));

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
        {selectedGood}

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
