import { useState } from 'react';
import 'bulma/css/bulma.css';
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
  'Garlic'
];

export const goodsAddOrLess = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  true
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam is selected');
  const [goodsAddOrLess2, setGoodsAddOrLess2] = useState(goodsAddOrLess);
  const [xButton, setXButton] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? (
          <h1>No goods selected</h1>
        ) : (
          <h1>{selectedGood}</h1>
        )}

        {xButton ? (
          <button
            onClick={() => {
              setSelectedGood('');
              setXButton(false);
              setGoodsAddOrLess2(
                goodsAddOrLess2.map(flag => (flag === false ? true : flag))
              );
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            aria-label="Clear selected goods"
          />
        ) : (
          <p />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                goodsAddOrLess2[index] ? '' : 'has-background-success-light'
              }
            >
              <td>
                <button
                  onClick={() => {
                    if (goodsAddOrLess2[index]) {
                      setSelectedGood(`${good} is selected`);
                      setXButton(true);

                      const i = goodsAddOrLess2.findIndex(
                        flag => flag === false
                      );

                      if (i >= 0) {
                        setGoodsAddOrLess2(prev => {
                          const tempGoods = [];

                          for (let k = 0; k < prev.length; k += 1) {
                            if (k === i) {
                              tempGoods[k] = true;
                            } else if (k === index) {
                              tempGoods[k] = !prev[k];
                            } else {
                              tempGoods[k] = prev[k];
                            }
                          }

                          return tempGoods;
                        });
                      }

                      setGoodsAddOrLess2(prev =>
                        prev.map((flag, j) => (j === index ? false : flag))
                      );
                    } else {
                      setSelectedGood('');
                      setXButton(false);
                      setGoodsAddOrLess2(prev =>
                        prev.map((flag, i) => (i === index ? true : flag))
                      );
                    }
                  }}
                  data-cy={
                    goodsAddOrLess2[index] ? 'AddButton' : 'RemoveButton'
                  }
                  type="button"
                  className={
                    goodsAddOrLess2[index] ? 'button' : 'button is-info'
                  }
                >
                  {goodsAddOrLess2[index] ? '+' : '-'}
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
