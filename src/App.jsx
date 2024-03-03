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
  const setDeselectedGood = () => setSelectedGood('');

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
              onClick={() => setDeselectedGood()}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const selected = good === selectedGood;
            const setButtonClass = () =>
              cn({
                'button is-info': selectedGood === good,
                button: selectedGood !== good,
              });

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': selected,
                })}
                key={good}
              >
                <td>
                  <button
                    data-cy={selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={setButtonClass()}
                    onClick={() =>
                      selected ? setDeselectedGood() : setSelectedGood(good)
                    }
                  >
                    {selected ? '-' : '+'}
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
