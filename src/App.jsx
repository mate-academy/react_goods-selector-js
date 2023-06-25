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
  const [nameGood, setNameGoog] = useState('Jam');

  return (
    <main className="section container">
      {nameGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${nameGood} `}
          is selected

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setNameGoog('');
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': nameGood === good,
              })}
            >
              <td>
                <button
                  data-cy={nameGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', { 'is-info': nameGood === good })}
                  onClick={() => {
                    if (nameGood === good) {
                      setNameGoog('');
                    } else {
                      setNameGoog(good);
                    }
                  }}
                >
                  {nameGood === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </main>
  );
};
