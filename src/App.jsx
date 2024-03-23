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
  const clearButton = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => {
        setSelectedGood(false);
      }}
    />
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected{clearButton}
          </>
        ) : (
          'No goods selected'
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(item => {
            const isActive = selectedGood === item;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isActive,
                })}
              >
                <td>
                  <button
                    data-cy={cn(isActive ? 'RemoveButton' : 'AddButton')}
                    type="button"
                    className={isActive ? 'button is-info' : 'button'}
                    onClick={() => {
                      setSelectedGood(isActive ? null : item);
                    }}
                  >
                    {isActive ? '-' : '+'}
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
