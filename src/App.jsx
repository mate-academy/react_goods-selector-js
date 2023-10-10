import cn from 'classnames';
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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const message = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {message}
        {
          selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood(null)}
            />
          )
        }

      </h1>

      <table className="table">
        <tbody>
          {
            goods.map((good) => {
              const CURRENT_GOOD = selectedGood === good;
              const SYMBOL_INSIDE_BUTTON = CURRENT_GOOD ? '-' : '+';
              /* eslint-disable-next-line max-len */
              const VALUE_INSIDE_DATA = CURRENT_GOOD ? 'RemoveButton' : 'AddButton';

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    cn({ 'has-background-success-light': CURRENT_GOOD })
                  }
                >
                  <td>
                    <button
                      data-cy={VALUE_INSIDE_DATA}
                      type="button"
                      className={cn('button', { 'is-info': CURRENT_GOOD })}
                      onClick={() => {
                        setSelectedGood(CURRENT_GOOD ? null : good);
                      }}
                    >
                      {SYMBOL_INSIDE_BUTTON}
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
