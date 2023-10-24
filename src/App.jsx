import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classnames from 'classnames';

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

  const isGoodSelected = good => good === selectedGood;

  const handleGoodClick = (good) => {
    setSelectedGood(!isGoodSelected(good) ? good : '');
  };

  return (
    <main className="section container">

      {!selectedGood.length ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={() => {
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3 RemoveButton"
          />
        </h1>
      )}

      <table className="table">
        {goods.map(good => (
          <tbody key={good}>
            <tr
              data-cy="Good"
              className={classnames({
                'has-background-success-light': isGoodSelected(good),
              })}
            >
              <td>
                <button
                  onClick={() => {
                    handleGoodClick(good);
                  }}
                  data-cy={
                    isGoodSelected(good) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={classnames('button', {
                    'is-info': isGoodSelected(good),
                  })}
                >
                  {isGoodSelected(good) ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
};
