import 'bulma/css/bulma.css';
import { useState } from 'react';
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

  const clickOnGood = (good) => {
    setSelectedGood(good);
  };

  const removeClickOnGood = () => {
    setSelectedGood('');
  }

  const ClearButton = selectedGood && (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={removeClickOnGood}
    />
  );

  const title = selectedGood ? (
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}
      {ClearButton}
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">
      No goods selected
    </h1>
  )

  return (
    <main className='section container'>
      {title}

      <table className='table'>
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''
              }
            >
              {selectedGood !== good ? (
                <td>
                  <button
                    data-cy="addButton"
                    type="button"
                    className="button"
                    onClick={() => clickOnGood(good)}
                  >
                    +
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="removeButton"
                    type="button"
                    className="button is-info"
                    onClick={removeClickOnGood}
                  >
                    -
                  </button>
                </td>
              )}

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
