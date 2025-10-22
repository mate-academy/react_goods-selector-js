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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [history, setHistory] = useState('');

  return (
    <main className="section container">
      {selectedGood.length > 0 ? (
        <>
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            {selectedGood.length > 0 && (
              <button
                onClick={() => {
                  setSelectedGood('');
                }}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            )}
          </h1>
          <p>
            History: {history}
            {history.length > 0 && (
              <button
                className="button ml-2"
                style={{
                  backgroundColor: 'red',
                }}
                type="button"
                onClick={() => {
                  setHistory('');
                }}
              >
                clean
              </button>
            )}
          </p>
        </>
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
              className={classNames({
                'has-background-success-light': good === selectedGood,
              })}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    onClick={() => setSelectedGood('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedGood(good);
                      setHistory(`${history} ${good}`);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
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
