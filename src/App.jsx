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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isSelected = good => selectedGood === good;

  const handleButtonClick = good => (
    setSelectedGood(isSelected(good) ? '' : good)
  );

  const clear = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood
          ? 'No goods selected'
          : (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clear}
              />
            </>
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good.replaceAll(/\W/g, '-')}
              data-cy="Good"
              className={isSelected(good)
                ? 'has-background-success-light'
                : null}
            >
              <td>
                <button
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${isSelected(good) ? 'is-info' : null}`}
                  onClick={() => handleButtonClick(good)}
                >
                  {isSelected(good) ? '-' : '+'}
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
