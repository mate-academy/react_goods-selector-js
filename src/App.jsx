import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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

  const Good = ({ good }) => (
    <tr
      data-cy="Good"
      className={cn({ 'has-background-success-light': selectedGood === good })}
    >
      <td>
        {selectedGood === good ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => setSelectedGood('')}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
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

  return (
    <main className="section container">
      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good good={good} key={good} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

// {/* <tr data-cy="Good">
//           <td>
//             <button
//               data-cy="AddButton"
//               type="button"
//               className="button"
//             >
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
//             <button
//               data-cy="AddButton"
//               type="button"
//               className="button"
//             >
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Garlic
//           </td>
//         </tr> */}
