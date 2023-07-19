import { useState } from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';
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
  const [selectedGood, setSelectedGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood.length > 0
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          style={{ display: !selectedGood ? 'none' : 'block' }}
          onClick={() => {
            setSelectedGoods('');
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={
                      isSelectedGood ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={cn('button', {
                      'is-info': isSelectedGood,
                    })}
                    onClick={() => {
                      setSelectedGoods(isSelectedGood ? '' : good);
                    }}
                  >
                    {isSelectedGood ? '-' : '+'}
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
