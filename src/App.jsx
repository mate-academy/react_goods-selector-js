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
  const [goodsValue, setGoodsValue] = useState('Jam');
  const [title, setTitle] = useState(` is selected`);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodsValue}
        {title}

        {(title !== 'No goods selected')
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setTitle('No goods selected');
                setGoodsValue('');
              }}
            />
          )
        }

      </h1>

      <table className="table">
        {goods.map(good => (
          <tbody>
            <tr
              data-cy="Good"
              className={
                (goodsValue === good)
                && ('has-background-success-light')
              }
            >
              <td>
                <button
                  data-cy={(goodsValue === good)
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={(goodsValue === good)
                    ? 'button is-info'
                    : 'button'
                  }
                  onClick={() => {
                    if (goodsValue !== good) {
                      setGoodsValue(good);
                      setTitle(' is selected');
                    } else {
                      setGoodsValue('');
                      setTitle('No goods selected');
                    }
                  }}
                >
                  {(goodsValue === good)
                    ? '-'
                    : '+'
                  }
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
};
