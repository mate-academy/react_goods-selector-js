import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectGood = good => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        <span data-cy="title-text">
          {selectedGood !== ''
            ? `${selectedGood} is selected`
            : 'No goods selected'}
        </span>
        {selectedGood !== '' && (
          <button
            onClick={() => handleClearSelection()}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            aria-label="Clear selection"
          />
        )}
      </h1>
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
                <button
                  onClick={() => {
                    if (selectedGood === good) {
                      handleClearSelection();
                    } else {
                      handleSelectGood(good);
                    }
                  }}
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': good === selectedGood,
                  })}
                >
                  {good === selectedGood ? '-' : '+'}
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
