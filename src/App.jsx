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
  const titleMessage = !selectedGood ? (
    'No goods selected'
  ) : (`${selectedGood} is selected`);
  const setButtonTitle = good => (selectedGood === good ? '-' : '+');
  const setDataCy = good => (
    selectedGood === good ? 'RemoveButton' : 'AddButton'
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleMessage}

        {!!selectedGood.length && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light':
                    isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={setDataCy(good)}
                    type="button"
                    className={cn('button', {
                      'is-info': isSelected,
                    })}
                    onClick={() => setSelectedGood(isSelected ? '' : good)}
                  >
                    {setButtonTitle(good)}
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
