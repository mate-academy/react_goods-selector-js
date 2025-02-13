import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

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
  const goodsStart = goods.map(good => {
    if (good === 'Jam') {
      return {
        name: good,
        isSelected: true,
      };
    }

    return {
      name: good,
      isSelected: false,
    };
  });

  const goodsClear = goods.map(good => {
    return {
      name: good,
      isSelected: false,
    };
  });
  const selectedClass = 'has-background-success-light';
  const [selected, setSelected] = useState(() => {
    const foundGood = goodsStart.find(good => good.isSelected);

    return foundGood ? `${foundGood.name} is selected` : 'No goods selected';
  });
  const [goodsInfo, setGoodsInfo] = useState(goodsStart);

  const toggleAvailability = name => {
    setGoodsInfo(
      prevGoods =>
        prevGoods.map(
          good =>
            good.name === name
              ? { name, isSelected: !good.isSelected }
              : { name: good.name, isSelected: false },
          // eslint-disable-next-line function-paren-newline
        ),
      // eslint-disable-next-line function-paren-newline
    );
  };

  function getClass(name) {
    return goodsInfo.find(good => good.name === name).isSelected
      ? selectedClass
      : '';
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected}

        {selected !== 'No goods selected' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGoodsInfo(goodsClear);
              setSelected('No goods selected');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsInfo.map(goodInfo => {
            return (
              <tr data-cy="Good" className={getClass(goodInfo.name)}>
                <td>
                  {getClass(goodInfo.name) === '' ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        toggleAvailability(goodInfo.name);
                        setSelected(`${goodInfo.name} is selected`);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        toggleAvailability(goodInfo.name);
                        setSelected('No goods selected');
                      }}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodInfo.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
