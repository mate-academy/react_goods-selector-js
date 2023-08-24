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
  const [message, setMessage] = useState(`${selectedGood} is selected`);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {message}
              <button
                onClick={() => {
                  setSelectedGood('');
                }}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )
          : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selectionFlag = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn(
                  { 'has-background-success-light': selectionFlag },
                )}
              >
                <td>
                  <button
                    onClick={() => {
                      setSelectedGood(!selectionFlag && good);
                      setMessage(!selectionFlag && `${good} is selected`);
                    }}
                    data-cy={
                      selectionFlag
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={cn(
                      'button', { 'is-info': selectionFlag },
                    )}
                  >
                    {selectionFlag ? '-' : '+'}
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
