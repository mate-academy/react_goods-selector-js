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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== 'No goods selected' ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood !== 'No goods selected' && (
          <button
            onClick={() => {
              setSelectedGood('No goods selected');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''
                }
              data-cy="Good"
            >
              <td>
                <button
                  onClick={() => {
                    if (selectedGood === good) {
                      setSelectedGood('No goods selected');
                    } else {
                      setSelectedGood(good);
                    }
                  }}
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button',
                    { 'is-info': selectedGood === good })}
                >
                  {selectedGood === good ? '-' : '+'}
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
