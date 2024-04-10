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
  const [selected, setSelected] = useState(true);
  const [selectGood, setSelectGood] = useState('Jam');

  function handleSelection(product) {
    let select = true;

    if (!product) {
      select = false;
    }

    setSelectGood(product);
    setSelected(select);
  }

  const handleResetClick = () => {
    setSelected('');
    setSelectGood('');
  };

  return (
    <main className="section container">
      {selected ? (
        <h1 className="title is-flex is-align-items-center">
          {selectGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleResetClick}
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
            const isSelect = selectGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelect ? 'has-background-success-light' : null}
              >
                <td>
                  <button
                    data-cy={isSelect ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isSelect ? 'is-info' : null}`}
                    onClick={() => handleSelection(isSelect ? null : good)}
                  >
                    {isSelect ? '-' : '+'}
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
};
