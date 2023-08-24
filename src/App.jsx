import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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

const getPrepareGoods = allGoods => allGoods
  .map((good, index) => ({ good, key: index }));

const prepareGoods = getPrepareGoods(goods);

export const App = () => {
  const startSelectGood = prepareGoods[8].good;
  const [selectGood, setSelectGood] = useState(startSelectGood);

  const handleProductClick = (product) => {
    if (selectGood === product) {
      setSelectGood(null);

      return;
    }

    setSelectGood(product);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectGood ? (
          <>
            <span>{`${selectGood} is selected`}</span>
            <button
              onClick={() => {
                setSelectGood(null);
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )
          : ('No goods selected')
        }
      </h1>

      <table className="table">
        <tbody>
          {prepareGoods.map(({ good, key }) => (
            <tr
              key={key}
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectGood === good,
              })}
            >
              <td>
                <button
                  onClick={() => handleProductClick(good)}
                  data-cy={selectGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': selectGood === good,
                  })}
                >
                  {selectGood === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
