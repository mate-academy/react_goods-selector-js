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

      {/* <h1
        className="title is-flex is-align-items-center"
        style={good ? ({ visibility: 'hidden' }) : ({ visibility: 'visible' })}
      >
        No goods selected
      </h1> */}

      <h1
        className="title is-flex is-align-items-center"
      >

        {good ? (
          <>
            {`${good} is selected`}

            <button
              onClick={() => {
                setGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>

          {goods.map(item => (
            <tr
              data-cy="Good"
              className={item === good ? ('has-background-success-light') : ''}
              key={item}
            >
              <td>
                <button
                  onClick={() => {
                    setGood(item === good ? '' : item);
                  }}
                  data-cy={item !== good ? 'AddButton' : 'RemoveButton'}
                  type="button"
                  className={item === good ? 'button is-info' : 'button'}
                >
                  {item === good ? ('-') : '+'}
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
