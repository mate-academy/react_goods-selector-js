import 'bulma/css/bulma.css';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';

const cx = classNames.bind(styles);

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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const className = cx({
              'is-vcentered': true,
              'is-vcentered has-background-success-light':
                selectedGood === good,
            });

            return (
              <tr
                key={good}
                data-cy="Good"
                className={className}
              >
                {selectedGood === good ? (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setGood('');
                      }}
                    >
                      -
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setGood(good);
                      }}
                    >
                      +
                    </button>
                  </td>
                )}

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
