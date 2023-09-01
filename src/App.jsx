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

  const selectGoodOnClick = (isGoodSelected, good) => {
    if (isGoodSelected) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

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
              onClick={() => selectGoodOnClick()}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  classNames({ 'has-background-success-light': isGoodSelected })
                }
              >
                <td>
                  <button
                    data-cy={
                      isGoodSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      classNames('button', { 'is-info': isGoodSelected })
                    }
                    onClick={() => selectGoodOnClick(isGoodSelected, good)}
                  >
                    {isGoodSelected
                      ? '-'
                      : '+'
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
