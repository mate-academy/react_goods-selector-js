import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

const GOODS = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(GOODS);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === null ? (
          'No goods selected'
        ) : (
          <>
            {`${selectedGood} is selected`}
            <button
              onClick={() => setSelectedGood(null)}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelectedGood = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isSelectedGood,
                })}
              >
                <td>
                  <button
                    onClick={() => {
                      if (!isSelectedGood) {
                        setSelectedGood(good);
                      } else {
                        setSelectedGood(null);
                      }
                    }}
                    data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', {
                      'button is-info': isSelectedGood,
                    })}
                  >
                    {isSelectedGood ? '-' : '+'}
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
