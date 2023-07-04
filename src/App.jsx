import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';
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
  const [selectGood, setSelectGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        { selectGood
          ? `${selectGood} is selected`
          : 'No goods selected'
        }

        {selectGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={classnames({
                  'has-background-success-light': isSelected,
                })}
              >

                <td>
                  {good !== selectGood ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setSelectGood(good);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setSelectGood('');
                      }}
                    >
                      -
                    </button>
                  )}
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
