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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? (
          'No goods selected'
        ) : (
          <>
            {selectedGood} is selected
            <button
              className="delete ml-3"
              type="button"
              onClick={() => setSelectedGood('')}
              data-cy="ClearButton"
            />
          </>
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
                data-cy="Good"
              >
                <td>
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      className="button is-info"
                      type="button"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      className="button"
                      type="button"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
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

  // (
  //   <main className="section container">
  //     <h1 className="title is-flex is-align-items-center">No goods selected</h1>

  //     <h1 className="title is-flex is-align-items-center">
  //       Jam is selected
  //       <button data-cy="ClearButton" type="button" className="delete ml-3" />
  //     </h1>

  //     <table className="table">
  //       <tbody>
  //         <tr data-cy="Good">
  //           <td>
  //             <button data-cy="AddButton" type="button" className="button">
  //               +
  //             </button>
  //           </td>

  //           <td data-cy="GoodTitle" className="is-vcentered">
  //             Dumplings
  //           </td>
  //         </tr>

  //         <tr data-cy="Good" className="has-background-success-light">
  //           <td>
  //             <button
  //               data-cy="RemoveButton"
  //               type="button"
  //               className="button is-info"
  //             >
  //               -
  //             </button>
  //           </td>

  //           <td data-cy="GoodTitle" className="is-vcentered">
  //             Jam
  //           </td>
  //         </tr>

  //         <tr data-cy="Good">
  //           <td>
  //             <button data-cy="AddButton" type="button" className="button">
  //               +
  //             </button>
  //           </td>

  //           <td data-cy="GoodTitle" className="is-vcentered">
  //             Garlic
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </main>
  // );
};
