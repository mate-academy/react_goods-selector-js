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
          onClick={() => {
            setSelectedGoods('');
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className="button"
                  onClick={() => {
                    setSelectedGoods(selectedGood === good ? '' : good);
                  }}
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
