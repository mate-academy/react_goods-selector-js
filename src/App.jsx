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
  const hasSelection = typeof selectedGood === 'string' && selectedGood !== '';
  const enrichedGoods = goods.map(good => ({ name: good }));
/*    // good é cada elemento, tais como: Dumplings, carrot e etc. o map, pega cada elemento good e coloca em um novo array.
    ...good,
    name: good, // adiciona name se não existir
  })); */

  return (
    <main className="section container">
      <div>
        {hasSelection ? (
          <>
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
            </h1>
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )}
      </div>
      <table className="table">
        <tbody>
          {enrichedGoods.map(good => (

            <tr
              data-cy="Good"
              key={good.name}
              className={
                good.name === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                {good.name !== selectedGood && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good.name)} // quando quero alterar o estado, chamo a função set value;
                  >
                    +
                  </button>
                )}
                {good.name === selectedGood && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
