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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {!selectedGood
          ? (
            'No goods selected'
          )
          : (
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
        }
      </h1>

      <table className="table">
        <tbody>
          {goodsObj.map((item) => {
            const { nameGoods, id } = item;
            const isChecked = selectedGood === nameGoods;

            const handlerClickButton = () => {
              setSelectedGood(isChecked ? null : nameGoods);
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
