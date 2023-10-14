import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const App = () => {
  const goods = [
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

  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleGoodSelect = (good) => {
    if (selectedGood === good) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${good === selectedGood ? 'is-info' : ''}`}
                  onClick={() => handleGoodSelect(good)}
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
