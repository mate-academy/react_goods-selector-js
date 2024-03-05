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

  function ClearButton() {
    setSelectedGood('');
  }

  function AddButton(good) {
    setSelectedGood(good);
  }

  function RemoveButton() {
    ClearButton();
  }

  return (
    <>
      <main className="section container">
        <h1
          className={
            selectedGood ? 'title is-flex is-align-items-center' : 'title'
          }
        >
          {selectedGood ? `${selectedGood} is selected` : `No goods selected`}
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={ClearButton}
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
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={
                      selectedGood === good ? 'button is-info' : 'button'
                    }
                    onClick={() =>
                      selectedGood !== good ? AddButton(good) : RemoveButton()
                    }
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
    </>
  );
};
