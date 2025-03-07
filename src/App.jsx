import 'bulma/css/bulma.css';
import './App.scss';
// import classNames from 'classnames';
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
  const handleRowClick = good => {
    if (selectedGood === good) {
      setSelectedGood(null);
    } else {
      setSelectedGood(good);
    }
  };

  // eslint-disable-next-line no-console
  console.log('rendering');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        {selectedGood}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                onClick={() => handleRowClick(good)}
                className={isSelected ? 'has-background-success-light' : ''}
                // eslint-disable-next-line react/no-array-index-key
                key={good}
                data-cy="Good"
              >
                <td>
                  <button data-cy="AddButton" type="button" className="button">
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
