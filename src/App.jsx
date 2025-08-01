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

// const GoodRow = ({ good, isSelected, onSelect }) => {
//   return (
//     <tr
//       data-cy="Good"
//       className={isSelected ? 'has-background-success-light' : ''}
//     >
//       <td>
//         <button
//           onClick={() => onSelect(good)}
//           data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
//           type="button"
//           className={`button ${isSelected ? 'is-info' : ''}`}
//         >
//           {isSelected ? '-' : '+'}
//         </button>
//       </td>

//       <td data-cy="GoodTitle" className="is-vcentered">
//         {good}
//       </td>
//     </tr>
//   );
// };

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectGood = good =>
    setSelectedGood(prev => (prev === good ? null : good));

  const clearSelection = () => setSelectedGood(null);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {/* {goods.map(good => (
            <GoodRow
              good={good}
              isSelected={selectedGood === good}
              onSelect={handleSelectGood}
              key={good}
            />
          ))} */}
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
                  onClick={() => handleSelectGood(good)}
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${selectedGood === good ? 'is-info' : ''}`}
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
