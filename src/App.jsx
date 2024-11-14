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

export const App = () => {
  const [selectedGoods, setSelectedGood] = useState(8);

  return (
    <main className="section container">
      {selectedGoods === -1 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goods[selectedGoods]} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(-1)}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            const valueBool = index === selectedGoods;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': valueBool })}
              >
                <td>
                  <button
                    data-cy={valueBool ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn({ 'is-info': valueBool, button: true })}
                    onClick={() => {
                      return valueBool
                        ? setSelectedGood(-1)
                        : setSelectedGood(index);
                    }}
                  >
                    {valueBool ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
