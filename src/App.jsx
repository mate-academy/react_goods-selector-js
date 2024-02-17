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
  const [selected, setSelected] = useState('Jam');

  const clearGood = () => {
    setSelected('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? `${selected} is selected` : 'No goods selected'}
        {selected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selected ? 'has-background-success-light' : ''}
            >
              <td>
                {good !== selected ?
                ( <button data-cy='AddButton' type='button' className='button' onClick={() => setSelected(good)}>
                +
                </button>)
                :
                ( <button data-cy='RemoveButton' type='button' className='button is-info' onClick={clearGood}>
                -
                </button>)
              }
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
