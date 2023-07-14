import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [good, selectedGood] = useState('Jam');

  const handleGoodClick = (item) => {
    if (good === item) {
      selectedGood(null);
    } else {
      selectedGood(item);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!good ? (
          'No goods selected'
        ) : (
          <>
            {`${good} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                selectedGood(null);
              }}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item) => {
            const buttonCy = good === item ? 'RemoveButton' : 'AddButton';

            return (
              <tr
                data-cy="Good"
                key={item}
                className={classNames({
                  'has-background-success-light': good === item,
                })}
              >
                <td>
                  <button
                    data-cy={buttonCy}
                    className={classNames('button', {
                      'is-info': good === item,
                    })}
                    type="button"
                    onClick={() => handleGoodClick(item)}
                  >
                    {good === item ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
