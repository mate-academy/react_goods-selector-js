import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
        {!selectedGood ? (
          'No goods selected'
        ) : (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setSelectedGood(null);
              }}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActiv = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isActiv,
                })}
              >
                <td>
                  <button
                    data-cy={isActiv ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isActiv ? 'button is-info' : 'button'}
                    onClick={() => {
                      setSelectedGood(isActiv ? null : good);
                    }}
                  >
                    {isActiv ? '-' : '+'}
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
