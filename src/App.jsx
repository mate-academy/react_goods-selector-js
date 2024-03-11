import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
        {selectedGood ? `${selectedGood} is selected` : `No goods selected`}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', {
                      'is-info': isSelected,
                    })}
                    onClick={() => {
                      setSelectedGood(isSelected ? '' : good);
                    }}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
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

  // <main className="section container">
  //   <table className="table">
  //     {/* <tbody>
  //       <tr data-cy="Good">
  //         <td>
  //           <button data-cy="AddButton" type="button" className="button">
  //             +
  //           </button>
  //         </td>

  // <td data-cy="GoodTitle" className="is-vcentered">
  //   Dumplings
  // </td>
  //       </tr>

  //       <tr data-cy="Good" className="has-background-success-light">
  //         <td>
  //           <button
  //             data-cy="RemoveButton"
  //             type="button"
  //             className="button is-info"
  //           >
  //             -
  //           </button>
  //         </td>

  //         <td data-cy="GoodTitle" className="is-vcentered">
  //           Jam
  //         </td>
  //       </tr>

  //       <tr data-cy="Good">
  //         <td>
  //           <button data-cy="AddButton" type="button" className="button">
  //             +
  //           </button>
  //         </td>

  //         <td data-cy="GoodTitle" className="is-vcentered">
  //           Garlic
  //         </td>
  //       </tr>
  //     </tbody> */}
  //   </table>
  // </main>
};
