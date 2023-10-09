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

export const goodsObject = goods
  .map((good, index) => ({ name: good, id: index }));

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const EMPTY_FILTER_MESSAGE = 'No goods selected';
  const reset = () => {
    setSelectedGood('');
  };

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
              onClick={reset}
            />
          </h1>
        )

        : (
          <h1 className="title is-flex is-align-items-center">
            {EMPTY_FILTER_MESSAGE}
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goodsObject.map((goodItem) => {
            const {
              name,
              id,
            } = goodItem;
            const isSelected = selectedGood === name;

            return (
              <tr
                data-cy="Good"
                key={id}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={reset}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          setSelectedGood(name);
                        }}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
