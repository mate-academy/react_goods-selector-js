import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const selectedGoodTitle = selectedGood ? `${selectedGood} is selected` : '';

  const handleSelectFactory = good => () => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGoodTitle}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {!!goods.length && (
            <>
              {goods.map((good) => {
                const isSelected = good === selectedGood;

                return (
                  <tr
                    data-cy="Good"
                    className={classNames({
                      'has-background-success-light': good === selectedGood,
                    })}
                    key={good}
                  >
                    <td>
                      {isSelected ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={handleSelectFactory('')}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={handleSelectFactory(good)}
                        >
                          +
                        </button>
                      )}
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </main>
  );
};
