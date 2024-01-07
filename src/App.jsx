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

  function isSelected(good) {
    return good === selectedGood;
  }

  return (
    <main className="section container">
      {
        selectedGood !== '' ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setSelectedGood('');
              }}
            />
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={isSelected(item) && 'has-background-success-light'}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className={isSelected(item) ? 'button is-info' : 'button'}
                  onClick={() => {
                    if (isSelected(item)) {
                      return setSelectedGood('');
                    }

                    return setSelectedGood(item);
                  }}
                >
                  {isSelected(item) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
