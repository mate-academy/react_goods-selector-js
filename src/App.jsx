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

function changeGoodState(selectedGood, clickedGood, setSelectedGood) {
  if (selectedGood === clickedGood) {
    return setSelectedGood('');
  }

  return setSelectedGood(clickedGood);
}

export const App = () => {
  const DEFAULT_GOOD = 'Jam';
  const [selectedGood, setSelectedGood] = useState(DEFAULT_GOOD);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
              key={good}
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  onClick={
                    () => changeGoodState(selectedGood, good, setSelectedGood)}
                  className={cn('button', {
                    'is-info': selectedGood === good,
                  })}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
