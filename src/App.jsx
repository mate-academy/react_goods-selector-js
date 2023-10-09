import 'bulma/css/bulma.css';
import { useState } from 'react';
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

let counter = 0;

const fullGoods = goods.map((good) => {
  counter += 1;

  return ({
    oneGood: `${good}`,
    id: counter,
  });
});

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const styleForTable = 'has-background-success-light';
  const styleForButton = 'button is-info';

  const resetButton = () => () => setSelectedGood('');
  const setButton = value => () => setSelectedGood(value);
  const goodChecherFunction = (condition, firstExp, secondExp) => (
    condition
      ? firstExp
      : secondExp
  );

  return (
    <main className="section container">
      <h1
        className="title is-flex is-align-items-center"
      >
        {!selectedGood
          ? 'No goods selected'
          : `${selectedGood} is selected`

        }
        {selectedGood
        && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={resetButton()}
        />
        )
        }
      </h1>

      <table className="table">
        <tbody>
          {fullGoods.map(({ oneGood, id }) => {
            const goodChecher = oneGood === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={
                  goodChecher
                  && `${styleForTable}`
                }
                key={id}
              >
                <td>
                  <button
                    data-cy={
                      goodChecherFunction(
                        goodChecher,
                        'RemoveButton',
                        'AddButton',
                      )
                    }
                    type="button"
                    className={
                      goodChecherFunction(goodChecher, styleForButton, 'button')
                    }
                    onClick={
                      goodChecherFunction(
                        goodChecher,
                        resetButton,
                        setButton(oneGood),
                      )
                    }
                  >
                    {
                      goodChecherFunction(goodChecher, '-', '+')
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {oneGood}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
