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
      {selectedGood ? (
        <>
        {`${selectedGood} is selected`}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        >

        </button>
        </>
      ) : (
        'No goods selected'
      )}
    </h1>

    <table className="table">
      <tbody>
        {goods.map((good) => {
          const isSelected = selectedGood === good;
          return (
            <tr key={good}
            data-cy="Good"
            className={isSelected ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className = {`${isSelected ? 'button is-info' : 'button'}`}
                  onClick={isSelected ? () => setSelectedGood('') : () => setSelectedGood(good)}
                >
                  {isSelected ? '-' : '+'}
                </button>
              </td>
              <td className='is-vcentered' data-cy="GoodTitle">{good}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </main>
  );}
