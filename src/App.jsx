import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selectedGood, setGood] = useState('Jam');

  const isSelectedGood = good => good === selectedGood;

  const handleGoodClick = (good) => {
    if (isSelectedGood(good)) {
      setGood('');
    } else {
      setGood(good);
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
              className={cn('delete ml-3', { hidden: !selectedGood })}
              onClick={() => setGood('')}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                cn({ 'has-background-success-light': isSelectedGood(good) })
                }
            >
              <td>
                <button
                  data-cy={isSelectedGood(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', { 'is-info': isSelectedGood(good) })}
                  onClick={() => handleGoodClick(good)}
                >
                  {isSelectedGood(good) ? '-' : '+'}
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

export default App;
