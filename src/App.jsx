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
  const toggleGood = (selected, good) => {
    if (selected === good) {
      setSelectedGood(null);

      return;
    }

    setSelectedGood(good);
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setSelectedGood(null)}
              />
            </>
          )
          : <>No goods selected</>}
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  selectedGood === good
                    ? 'has-background-success-light'
                    : ''
                  }
                key={good}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      selectedGood === good
                        ? 'button is-info'
                        : 'button'
                    }
                    onClick={() => toggleGood(selectedGood, good)}
                  >
                    { selectedGood === good ? '-' : '+' }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  { good }
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
