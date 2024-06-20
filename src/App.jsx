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
        {selectedGood !== 'No goods' ? (
          <>
          {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('No goods')}
            />
          </>
        ) : <>{selectedGood} selected</>}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => {
            if (item === selectedGood) {
              return (
                <tr
                  data-cy="Good"
                  className="has-background-success-light"
                  key={item}
                >
                  <td>
                    <button
                      onClick={() => setSelectedGood('No goods')}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
                  </td>
                </tr>
              );
            }

            return (
              <tr data-cy="Good" key={item}>
                <td>
                  <button
                    onClick={() => setSelectedGood(`${item}`)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
