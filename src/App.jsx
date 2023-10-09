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
  const [checked, setChecked] = useState(8);
  const [currentName, setCurrentName] = useState('Jam');

  return (
    <main className="section container">
      {checked === null
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${currentName} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setChecked(null)}
            />
          </h1>
        )
      }
      <table className="table">
        <tbody>
          {goods.map((goodName, index) => {
            const isChecked = checked === index;

            const handlerClickButton = () => {
              setChecked(isChecked ? null : index);
              setCurrentName(goodName);
            };

            return (
              <tr
                key={goods[index]}
                data-cy="Good"
                className={`${isChecked && 'has-background-success-light'}`}
              >
                <td>
                  <button
                    data-cy={`${isChecked ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${isChecked && 'is-info'}`}
                    onClick={handlerClickButton}
                  >
                    {isChecked ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
