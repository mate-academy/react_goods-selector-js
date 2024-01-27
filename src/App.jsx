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

export const ItemGood = ({
  good,
  goodsMod,
  goodsCh,
  setGoodsCh,
}) => {
  const { id, name, bool } = good;

  function setNewValues() {
    const itemHasTrueId
    = goodsCh.find(i => i.bool === true)
      ? goodsCh.find(i => i.bool === true).id
      : 0;

    if (itemHasTrueId !== id) {
      const a = goodsMod.map(e => ({
        ...e, bool: false,
      }));
      const chosen = a.find(e => e.id === id);

      chosen.bool = true;

      setGoodsCh(a);
    } else if (itemHasTrueId === id) {
      const a = goodsMod.map(e => ({
        ...e, bool: false,
      }));

      setGoodsCh(a);
    }
  }

  const btnClickAction = function clickAct({ type }) {
    if (type === 'click') {
      setNewValues();
    }
  };

  return (
    <tr
      data-cy="Good"
      className={cn({
        'has-background-success-light': bool,
      })}
    >
      <td>
        <button
          data-cy={`${bool ? 'RemoveButton' : 'AddButton'}`}
          type="button"
          className={cn('button', {
            'is-info': bool,
          })}
          onClick={
            btnClickAction
          }
        >
          {`${bool ? '-' : '+'}`}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {name}
      </td>
    </tr>
  );
};

export const App = () => {
  const goodsMod = goods.map(itemM => ({
    id: goods.indexOf(itemM) + 1, name: itemM, bool: false,
  }));

  const Jam = goodsMod.find(i => i.name === 'Jam');

  Jam.bool = true;

  const [goodsCh, setGoodsCh] = useState(goodsMod);

  const selectedName
  = goodsCh.find(i => i.bool === true)
    ? goodsCh.find(i => i.bool === true).name : '';

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
          onClick={
            setNoGoods
          }
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
