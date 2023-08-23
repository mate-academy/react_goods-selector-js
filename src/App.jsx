import { useState } from 'react';
import cn from 'classnames';
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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClearButtonClick = () => {
    setSelectedGood('');
  };

  function check(myGood, hookGood) {
    return myGood === hookGood;
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <>
            <button
              data-cy="ClearButton"
              className="delete ml-3"
              type="button"
              onClick={handleClearButtonClick}
            />
          </>
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': check(good, selectedGood),
              })}
            >
              <td>
                {check(good, selectedGood) ? (
                  <>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClearButtonClick}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setSelectedGood(good);
                      }}
                    >
                      +
                    </button>
                  </>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </main>
  );
};
