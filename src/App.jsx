import { useState } from 'react';
import 'bulma/css/bulma.css';
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

  function handleSelectedGood(value) {
    setSelectedGood(value);
  }

  const goodIsSelected = (
    <h1 className="title is-flex is-align-items-center">
      {selectedGood} is selected
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => handleSelectedGood('')}
      />
    </h1>
  );
  const noGoodSelected = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  return (
    <main className="section container">
      {selectedGood !== '' ? goodIsSelected : noGoodSelected}
      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              key={item}
              data-cy="Good"
              className={
                item === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                {item === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => handleSelectedGood('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectedGood(item)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
