import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
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
  const [selectedGood, setSelectedGoods] = useState('Jam');

  function toggleClick(good) {
    if (selectedGood === good) {
      setSelectedGoods('');
    } else {
      selectedGood(good);
    }
  }

  function clearClick() {
    setSelectedGoods('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearClick}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames(selectedGood === good
                ? 'has-background-success-light' : 'is-vcentered')}
            >
              <td>
                <button
                  onClick={() => toggleClick(good)}
                  data-cy={selectedGood === good
                    ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames(selectedGood === good
                    ? 'button is-info' : 'button')}
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
