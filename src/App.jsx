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
  const [currentGood, setCurrentGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {currentGood === '' ? 'No goods selected' : `${currentGood} is selected`}

        {
          currentGood !== '' && (
            <button
              onClick={() => (
                setCurrentGood('')
              )}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const [isActive, setIsActive] = useState(true);
            const handleButtonClick = () => {
              setIsActive(!isActive);
            };

            const condition = isActive ? '+' : '-';

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === currentGood ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    onClick={() => {
                      handleButtonClick();
                      setCurrentGood(good);
                      if (condition === '-') {
                        setCurrentGood('');
                      }
                    }}
                    data-cy={
                      good === currentGood ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${good === currentGood ? 'is-info' : ''}`}
                  >
                    {isActive ? '+' : '-'}
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
