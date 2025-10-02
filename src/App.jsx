// import 'bulma/css/bulma.css';
// import './App.scss';
// import { useState } from 'react';

// export const goods = [
//   'Dumplings',
//   'Carrot',
//   'Eggs',
//   'Ice cream',
//   'Apple',
//   'Bread',
//   'Fish',
//   'Honey',
//   'Jam',
//   'Garlic',
// ];

// export const App = () => {
//   const [selectedGood, setSelectedGood] = useState('Jam');

//   const handleSelectGood = good => setSelectedGood(good);
//   const handleClearGood = () => setSelectedGood('');

//   return (
//     <main className="section container">
//       {selectedGood ? (
//         <h1 className="title is-flex is-align-items-center">
//           {selectedGood} is selected
//           <button
//             data-cy="ClearButton"
//             type="button"
//             className="delete ml-3"
//             onClick={handleClearGood}
//           />
//         </h1>
//       ) : (
//         <h1 className="title is-flex is-align-items-center">
//           No goods selected
//         </h1>
//       )}

//       <table className="table">
//         <tbody>
//           {goods.map(good => {
//             const isSelected = good === selectedGood;

//             return (
//               <tr
//                 data-cy="Good"
//                 key={good}
//                 className={isSelected ? 'has-background-success-light' : ''}
//               >
//                 <td>
//                   {isSelected ? (
//                     <button
//                       data-cy="RemoveButton"
//                       type="button"
//                       className="button is-info"
//                       onClick={handleClearGood}
//                     >
//                       -
//                     </button>
//                   ) : (
//                     <button
//                       data-cy="AddButton"
//                       type="button"
//                       className="button"
//                       onClick={() => handleSelectGood(good)}
//                     >
//                       +
//                     </button>
//                   )}
//                 </td>
//                 <td data-cy="GoodTitle" className="is-vcentered">
//                   {good}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </main>
//   );
// };

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

  const hasSelection = selectedGood !== '';

  const handleSelect = good => setSelectedGood(good);
  const handleClear = () => setSelectedGood('');
  const handleRemove = () => setSelectedGood('');

  return (
    <main className="section container">
      {hasSelection ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleRemove}
                    >
                      -
                    </button>
                  ) : (
                    !hasSelection && (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => handleSelect(good)}
                      >
                        +
                      </button>
                    )
                  )}
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
