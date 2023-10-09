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

const goodsObj = goods
  .map((item, index) => ({ nameGoods: item, id: index + 1 }));

export const App = () => {
  const [checked, setChecked] = useState(8);
  const [currentName, setCurrentName] = useState('Jam');

  return (
    <main className="section container">
      {!checked
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
          {goodsObj.map((item) => {
            const { nameGoods, id } = item;
            const isChecked = checked === id;

            const handlerClickButton = () => {
              setChecked(isChecked ? null : id);
              setCurrentName(nameGoods);
            };

            return (

              <tr
                key={id}
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
                  {nameGoods}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
