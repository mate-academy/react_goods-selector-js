import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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
  const [selected, setSelectedGood] = useState('Jam');
  const handleClick = (good) => {
    setSelectedGood(selected === good ? '' : good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? `${selected} is selected` : 'No goods selected'}
        {selected && (
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
          <div>
            {goods.map(good => (
              <tr
                className={good === selected
                  ? 'has-background-success-light' : ''}
                data-cy="Good"
              >
                <td>
                  <button
                    onClick={() => handleClick(good)}
                    data-cy={good === selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': selected === good })}
                  >
                    {selected === good ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </div>
        </tbody>
      </table>
    </main>
  );
};
