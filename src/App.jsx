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
  function clickHandler({ target }) {
    if (selectedGood === target.dataset.good) {
      setSelectedGood('');
    } else {
      setSelectedGood(target.dataset.good);
    }
  }

  const [selectedGood, setSelectedGood] = useState('');

  return (
    <main className="section container">
      {selectedGood === ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((el, i) => (
            <tr
              data-cy="Good"
              key={el}
              className={`${el === selectedGood && 'has-background-success-light'}`}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  data-good={el}
                  className={`button ${el === selectedGood && 'is-info'}`}
                  onClick={clickHandler}
                  id={i}
                >
                  {el === selectedGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {el}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
