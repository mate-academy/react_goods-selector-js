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

  function handleClick(good) {
    if (good !== selectedGood) {
      setSelectedGood(good);
    } else {
      setSelectedGood('');
    }
  }

  return (
    <main className="section container">
      {selectedGood.length === 0
        ? <h1 className="title is-flex is-align-items-center">
          No goods selected
          </h1>
        : <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected

          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => handleClick(good)}
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectedGood === good
                    ? 'button is-info' : 'button'}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

          {/* <tr data-cy="Good" className='has-background-success-light'>
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {selectedGood}
            </td>
          </tr> */}

          {/* <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {selectedGood}
            </td>
          </tr> */}

          {/* <tr data-cy="Good">
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
};
