import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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
  const DEFAULT_GOOD = goods[8];
  const [titleGood, setTitleGood] = useState(DEFAULT_GOOD);
  const [noGoodMessage, setNoGoodMessage] = useState(false);

  return (
    <main className="section container">
      { noGoodMessage
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${titleGood} is selected`}

            <button
              onClick={() => {
                setNoGoodMessage(true);
                setTitleGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>

          {
          goods.map(good => (
            <tr
              className={cn('', {
                'has-background-success-light': titleGood === good,
              })}
              data-cy="Good"
              key={good}
            >
              <td>
                { titleGood === good
                  ? (
                    <button
                      onClick={() => {
                        setTitleGood('');
                        setNoGoodMessage(true);
                      }}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setTitleGood(good);
                        setNoGoodMessage(false);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )

                }
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </main>
  );
};
