import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  const [selectedGood, setValue] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setValue('')}
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((item, index) => (
            <tr
              data-cy="Good"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={classNames({
                'has-background-success-light': selectedGood === item,
              })}
            >
              <td>
                {selectedGood === item
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setValue('')}
                    >
                      -
                    </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setValue(item)}
                    >
                      +
                    </button>
                  )
                }

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
