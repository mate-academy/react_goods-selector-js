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

  const isSelectedGood = good => good === selectedGood;

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
            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isSelectedGood(good),
                })}
              >
                <td>
                  <button
                    onClick={() => {
                      if (!isSelectedGood(good)) {
                        setSelectedGood(good);
                      } else {
                        setSelectedGood(null);
                      }
                    }}
                    data-cy={
                      isSelectedGood(good) ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'button is-info': isSelectedGood(good),
                    })}
                  >
                    {isSelectedGood(good) ? '-' : '+'}
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
