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

  const handleAddButtonClick = (good) => {
    setSelectedGood(prevGood => (prevGood === good ? null : good));
  };

  const handleClearButtonClick = () => {
    setSelectedGood(null);
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
            onClick={handleClearButtonClick}
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={
                    good === selectedGood ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={
                    good === selectedGood ? 'button is-info' : 'button'
                  }
                  onClick={() => handleAddButtonClick(good)}
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

// <tr data-cy="Good" className="has-background-success-light">
//   <td>
//     <button
//       data-cy="RemoveButton"
//       type="button"
//       className="button is-info"
//     >
//       -
//     </button>
//   </td>
