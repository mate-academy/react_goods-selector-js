import { useState } from 'react';

import 'bulma/css/bulma.css';
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

export const App = () => {
  const activeState = 'Jam';
  const [name, setName] = useState(activeState);
  const [activeGood, setActiveGood] = useState(activeState);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {name === '' ? (
          'No goods selected'
        ) : (
          <>
            {`${name} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setName('');
                setActiveGood(null);
              }}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGood = good === activeGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isGood ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    onClick={() => {
                      setName(isGood ? '' : good);
                      setActiveGood(isGood ? null : good);
                    }}
                    data-cy={isGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isGood ? 'is-info' : ''}`}
                  >
                    {isGood ? '-' : '+'}
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
