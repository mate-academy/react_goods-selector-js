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
  const [good, setGood] = useState('Jam');
  const [active, setActive] = useState(
    goods.reduce((initObj, goodName) => {
      return {
        ...initObj,
        [goodName]: goodName === 'Jam',
      };
    }, {}),
  );

  const clearButton = () => {
    setActive(objGoods => ({
      [good]: !objGoods[good],
    }));
  };

  return (
    <main className="section container">
      {good ? (
        <h1 className="title is-flex is-align-items-center">
          {good} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood(null);
              clearButton();
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(item => {
            return (
              <tr
                key={item}
                data-cy="Good"
                className={`${active[item] ? 'has-background-success-light' : ''}`}
              >
                <td>
                  {active[item] ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setGood(null);
                        setActive(objGoods => ({
                          [item]: !objGoods[item],
                        }));
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setGood(item);
                        setActive(objGoods => ({
                          [item]: !objGoods[item],
                        }));
                      }}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
