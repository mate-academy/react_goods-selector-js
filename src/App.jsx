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
  const [isActive, selectedGood] = useState('Jam');

  const stateOfGood = (good) => {
    const check = isActive === good ? selectedGood('') : selectedGood(good);

    return check;
  };

  const checkGoods = isActive ? `${isActive} is selected` : 'No goods selected';

  return (
    <main className="section container">
      <h1 className={
        cn('title', { 'title is-flex is-align-items-center': isActive })}
      >
        {checkGoods}

        {isActive && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => (selectedGood(current => ''))}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const checkIsActive = isActive === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  cn('', { 'has-background-success-light': checkIsActive })
                }
              >
                <td>
                  <button
                    data-cy={checkIsActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={
                      cn('button', { 'button is-info': checkIsActive })
                    }
                    onClick={() => stateOfGood(good)}
                  >
                    {checkIsActive ? '-' : '+'}
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
