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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setSelectedGood('')}
              />
            </>
          )
          : 'No goods selected'
        }
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map((good) => {
              const goodCheck = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={cn({ 'has-background-success-light': goodCheck })}
                >
                  <td>
                    <button
                      data-cy={
                        goodCheck
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={`button ${goodCheck && 'is-info'}`}
                      onClick={
                        () => setSelectedGood(goodCheck
                          ? ''
                          : good)
                      }
                    >
                      {goodCheck
                        ? '-'
                        : '+'
                      }
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </main>
  );
};
