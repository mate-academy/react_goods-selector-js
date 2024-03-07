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
  const [good, setGood] = useState('Jam');

  const isGoodSelected = item => item === good;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? (
          <>
            {`${good} is selected`}
            <button
              onClick={() => setGood(null)}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': isGoodSelected(item),
              })}
              key={item}
            >
              <td>
                <button
                  onClick={() => {
                    if (good !== item) {
                      setGood(item);
                    } else {
                      setGood(null);
                    }
                  }}
                  data-cy={isGoodSelected(item) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'button is-info': isGoodSelected(item),
                  })}
                >
                  {isGoodSelected(item) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
