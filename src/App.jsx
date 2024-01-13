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

  const stateOfGood = (good) => {
    const check = selectedGood === good
      ? setSelectedGood('') : setSelectedGood(good);

    return check;
  };

  const checkGoods = selectedGood ? `${selectedGood} is selected` : 'No goods selected';

  return (
    <main className="section container">
      <h1 className={
        cn('title', { 'title is-flex is-align-items-center': selectedGood })}
      >
        {checkGoods}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => (setSelectedGood(current => ''))}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const checkselectedGood = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  cn({ 'has-background-success-light': checkselectedGood })
                }
              >
                <td>
                  <button
                    data-cy={checkselectedGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={
                      cn('button', { 'button is-info': checkselectedGood })
                    }
                    onClick={() => stateOfGood(good)}
                  >
                    {checkselectedGood ? '-' : '+'}
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
