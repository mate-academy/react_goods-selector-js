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
        {selectedGood === null
          ? 'No good selected'
          : `${selectedGood} is selected`}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood(null)}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy="SelectButton"
                  type="button"
                  className={classNames('button', {
                    'is-info': selectedGood === good,
                  })}
                  onClick={() => {
                    setSelectedGood(selectedGood === good ? null : good);
                  }}
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
