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

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  const handleSelectGood = good => {
    setSelectedGood(good);
  };

  const handleRemoveGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClearSelection}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(x => (
            <tr
              data-cy="Good"
              key={x}
              className={classNames('', {
                'has-background-success-light': selectedGood === x,
              })}
            >
              <td>
                {selectedGood === '' && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectGood(x)}
                  >
                    +
                  </button>
                )}
                {selectedGood === x && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleRemoveGood}
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
