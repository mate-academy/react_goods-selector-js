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
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goods.includes(good) ? (
          <>
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGood('')}
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
              key={item}
              data-cy="Good"
              className={item === good ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={item === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${item === good ? 'is-info' : ''}`}
                  data-item={item}
                  onClick={e => {
                    setGood(item === good ? '' : e.target.dataset.item);
                  }}
                >
                  {item === good ? '-' : '+'}
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
